'use strict';

var async = require('async');
var extend = require('../helpers/clone-extend').extend;
var strings = require('../strings');

/**
 * Retrieves Stormpath settings from the API service, and ensures the local
 * configuration object properly reflects these settings.
 *
 * @class
*/
function EnrichIntegrationFromRemoteConfigStrategy (clientFactory) {
  this.clientFactory = clientFactory;
}

EnrichIntegrationFromRemoteConfigStrategy.prototype._resolveApplication = function (config, callback) {
  var application = config.application;
  if (!application || !application.href || !application.getAccountStoreMappings) {
    callback(new Error(strings.UNABLE_TO_RESOLVE_APP));
  } else {
    callback(null, config.application);
  }
};

EnrichIntegrationFromRemoteConfigStrategy.prototype._validateAccountStore = function (config, app, callback) {
  app.getAccountStoreMappings(function (err, mappings) {
    if (err) {
      return callback(err);
    }

    if (mappings.size === 0) {
      return callback(new Error(strings.NO_ACCOUNT_STORES_MAPPED));
    } else if (config.web.register.enabled && app.defaultAccountStoreMapping === null) {
      return callback(new Error(strings.NO_DEFAULT_ACCOUNT_STORE_MAPPED));
    }

    callback(null, app);
  });
};

// Returns the OAuth policy of the Stormpath Application.
EnrichIntegrationFromRemoteConfigStrategy.prototype._enrichWithOAuthPolicy = function (app, callback) {
  app.getOAuthPolicy(function(err, policy) {
    if (err) {
      return callback(err);
    }

    app.oAuthPolicy = policy;

    return callback(null, app);
  });
};

// Iterate over all account stores on the given Application, looking for all
// Social providers.  We'll then create a config.providers array which we'll
// use later on to dynamically populate all social login configurations ^^
EnrichIntegrationFromRemoteConfigStrategy.prototype._enrichWithSocialProviders = function (config, application, callback) {
  application.getAccountStoreMappings(function(err, mappings) {
    if (err) {
      return callback(err);
    }

    if (!config.web.social) {
      config.web.social = {};
    }

    mappings.each(function (mapping, next) {
      mapping.getAccountStore(function (err, accountStore) {
        if (err) {
          return next(err);
        }

        // Iterate directories
        if (/\/directories/.test(accountStore.href)) {
          accountStore.getProvider(function(err, remoteProvider) {
            if (err) {
              return next(err);
            }

            var providerId = remoteProvider.providerId;

            // If the provider isn't a Stormpath, AD, or LDAP directory it's a social directory.
            if (['stormpath', 'ad', 'ldap'].indexOf(providerId) === -1) {
              // Remove unnecessary properties that clutter our config.
              delete remoteProvider.href;
              delete remoteProvider.createdAt;
              delete remoteProvider.updatedAt;

              var localProvider = config.web.social[providerId];

              if (!localProvider) {
                localProvider = config.web.social[providerId] = {};
              }

              if (!localProvider.uri) {
                localProvider.uri = '/callbacks/' + remoteProvider.providerId;
              }

              /**
               * "localScope" backwards compatibility code to preserve locally
               * defined scope options.  Soon developers will specify their
               * required scope on the directory provider resource.  But in the
               * meantime, we should not overwrite what they've provided locally.
               */

              var localScope;

              if (localProvider.scope) {
                localScope = localProvider.scope;
              }

              extend(remoteProvider, { enabled: true });
              extend(localProvider, remoteProvider);

              if (localScope) {
                localProvider.scope = localScope;
              }

            }

            next();
          });
        } else {
          next();
        }
      });
    }, function(err) {
      callback(err, application);
    });
  });
};

// Finds and returns an Application's default Account Store (Directory)
// object.  If one doesn't exist, nothing will be returned.
EnrichIntegrationFromRemoteConfigStrategy.prototype._resolveDirectoryHref = function (app, callback) {
  var outerScope = this;

  app.getAccountStoreMappings(function(err, mappings) {
    if (err) {
      return callback(err);
    }

    mappings.detect(function(mapping, detectCallback) {
      detectCallback(mapping.isDefaultAccountStore);
    }, function(defaultMapping) {
      if (defaultMapping) {
        var href = defaultMapping.accountStore.href;

        if (href.match(/directories/)) {
          return callback(null, href);
        }

        if (href.match(/group/)) {
          outerScope.client.getGroup(href, function(err, group) {
            return callback(err, group && group.directory.href);
          });
        } else {
          return callback(null, null);
        }
      } else {
        return callback(null, null);
      }
    });
  });
};

// Pulls down all of a Directory's configuration settings,
// and applies them to the local configuration.
EnrichIntegrationFromRemoteConfigStrategy.prototype._enrichWithDirectoryPolicies = function (client, config, directoryHref, callback) {
  if (!directoryHref) {
    return callback(null, null);
  }

  // Helper method that checks if a status is set to "enabled".
  var isEnabled = function (status) {
    return status === 'ENABLED';
  };

  // Returns the callback immediately if there is an error.
  // Continues processing if there isn't.
  var stopIfError = function (process) {
    return function (err, result) {
      if (err) {
        callback(err);
      } else {
        process(result);
      }
    }
  };

  // Enrich config with with directory policies.
  client.getDirectory(directoryHref, { expand: 'passwordPolicy,accountCreationPolicy' }, stopIfError(function (directory) {
    var resetEmailStatusEnabled = isEnabled(directory.passwordPolicy.resetEmailStatus);
    var verificationEmailStatusEnabled = isEnabled(directory.accountCreationPolicy.verificationEmailStatus);

    // Enrich config with account policies.
    extend(config, {
      web: {
        forgotPassword: {
          enabled: config.web.forgotPassword.enabled === false ? false : resetEmailStatusEnabled
        },
        changePassword: {
          enabled: config.web.changePassword.enabled === false ? false : resetEmailStatusEnabled
        },
        verifyEmail: {
          enabled: config.web.verifyEmail.enabled === false ? false : verificationEmailStatusEnabled
        }
      }
    });

    // Validate that auto login and email verification aren't enabled at the same time.
    if (config.web.register.autoLogin && config.web.verifyEmail.enabled) {
      return callback(new Error(strings.CONFLICTING_AUTO_LOGIN_AND_EMAIL_VERIFICATION_CONFIG));
    }

    // Enrich config with password policies.
    directory.getPasswordPolicy(stopIfError(function (policy) {
      policy.getStrength(stopIfError(function (strength) {
        // Remove the href property from the Strength Resource, we don't want
        // this to clutter up our nice passwordPolicy configuration
        // dictionary!
        delete strength.href;

        config.passwordPolicy = strength;

        callback(null, null);
      }));
    }));
  }));
};

EnrichIntegrationFromRemoteConfigStrategy.prototype.process = function (config, callback) {
  var tasks = [];

  if (config.skipRemoteConfig) {
    return callback(null, config);
  }

  var client = this.client = this.clientFactory(config);

  if (config.application && config.application.href) {
    tasks = tasks.concat([
      this._resolveApplication.bind(this, config),
      this._validateAccountStore.bind(this, config),
      this._enrichWithOAuthPolicy.bind(this),
      this._enrichWithSocialProviders.bind(this, config),
      this._resolveDirectoryHref.bind(this),
      this._enrichWithDirectoryPolicies.bind(this, client, config)
    ]);
  }

  client.on('error', function (err) {
    callback(err);
  });

  client.on('ready', function () {
    async.waterfall(tasks, function (err) {
      callback(err, err ? null : config);
    });
  });
};

module.exports = EnrichIntegrationFromRemoteConfigStrategy;
