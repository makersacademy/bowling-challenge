'use strict';

var extend = require('../helpers/clone-extend').extend;

/**
 * Represents a strategy that validates the configuration (post loading).
 *
 * @class
 */
function ValidateClientConfigStrategy () {
}

ValidateClientConfigStrategy.prototype.process = function (config, callback) {
  var newError = function (err) {
    callback(new Error(err));
  };

  if (!config) {
    return newError("Configuration not instantiated.");
  }

  var client = config.client;

  if (!client) {
    return newError("Client cannot be empty.");
  }

  var apiKey = client.apiKey;

  if (!apiKey) {
    return newError("API key cannot be empty.");
  } if (!apiKey.id || !apiKey.secret) {
    return newError("API key ID and secret is required.");
  }

  var application = config.application;

  if (!application) {
    return newError("Application cannot be empty.");
  }

  if (application.href && application.href.indexOf('/applications/') === -1) {
    return newError("Application HREF '" + application.href + "' is not a valid Stormpath Application HREF.");
  }

  var web = config.web;

  if (web && web.spa && web.spa.enabled && web.spa.view === null) {
    return newError("SPA mode is enabled but stormpath.web.spa.view isn't set. This needs to be the absolute path to the file that you want to serve as your SPA entry.");
  }

  callback(null, config);
};

module.exports = ValidateClientConfigStrategy;
