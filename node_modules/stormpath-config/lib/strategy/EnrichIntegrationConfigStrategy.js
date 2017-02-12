'use strict';

var extend = require('../helpers/clone-extend').extend;

/**
 * Represents a strategy that enriches the configuration (post loading).
 *
 * @class
 */
function EnrichIntegrationConfigStrategy (userConfig) {
  this.userConfig = userConfig;
}

EnrichIntegrationConfigStrategy.prototype.process = function (config, callback) {
  var webFeaturesToEnable = [];

  // If a user enables a boolean configuration option named `website`, this
  // means the user is building a website and we should automatically enable
  // certain features in the library meant for users developing websites.  This
  // is a simpler way of handling configuration than forcing users to specify
  // all nested JSON configuration options themselves.
  if (config.website) {
    webFeaturesToEnable.push('register');
    webFeaturesToEnable.push('login');
    webFeaturesToEnable.push('logout');
    webFeaturesToEnable.push('me');
  }

  // If a user enables a boolean configuration option named `api`, this means
  // the user is building an API service, and we should automatically enable
  // certain features in the library meant for users developing API services --
  // namely, our OAuth2 token endpoint (/oauth/token).  This allows users
  // building APIs to easily provision OAuth2 tokens without specifying any
  // nested JSON configuration options.
  if (config.api) {
    webFeaturesToEnable.push('oauth2');
  }

  var userConfig = this.userConfig;

  webFeaturesToEnable.forEach(function (feature) {
    var webFeatures = {};

    // Only turn on features that haven't already been configured by the user.
    if (!(userConfig && userConfig.web && (feature in userConfig.web) && ('enabled' in userConfig.web[feature]))) {
      webFeatures[feature] = {
        enabled: true
      };
    }

    extend(config, {
      web: webFeatures
    });
  });

  callback(null, config);
};

module.exports = EnrichIntegrationConfigStrategy;
