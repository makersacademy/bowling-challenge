'use strict';

var LoadAPIKeyConfigStrategy = require('./LoadAPIKeyConfigStrategy');

/**
 * Represents a strategy that that loads an API key specified in config into the configuration.
 *
 * @class
 */
function LoadAPIKeyFromConfigStrategy () {
}

LoadAPIKeyFromConfigStrategy.prototype.process = function (config, callback) {
  if (!config.client || !config.client.apiKey) {
    return callback(null, config);
  }

  var apiKey = config.client.apiKey;

  if (apiKey.file) {
    var loadKeyStrategy = new LoadAPIKeyConfigStrategy(apiKey.file, true);
    loadKeyStrategy.process(config, callback);
  } else {
    callback(null, config);
  }
};

module.exports = LoadAPIKeyFromConfigStrategy;
