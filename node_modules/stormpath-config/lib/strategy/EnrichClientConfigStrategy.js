'use strict';

var extend = require('../helpers/clone-extend').extend;

/**
 * Represents a strategy that enriches the API Key configuration (post loading).
 *
 * @class
 */
function EnrichClientConfigStrategy () {
}

EnrichClientConfigStrategy.prototype.process = function (config, callback) {
  // If we have specified an API key in the root, then copy this to our client API key.
  if (config.apiKey) {
    var extendWith = {};

    // Only copy if we have a value set.
    // This is to things such as NULL defaults.
    for (var key in config.apiKey) {
      if (config.apiKey[key]) {
        extendWith[key] = config.apiKey[key];
      }
    }

    extend(config, {
      client: {
        apiKey: extendWith
      }
    })
  }

  // For backwards compatibility reasons, if no API key is specified we'll try
  // to grab the API credentials out of our new format and shove it into the old
  // format.  This can go away once we cut a release and decide to no longer
  // support the old configuration formatting.
  if (!config.apiKey && config.client && config.client.apiKey) {
    config.apiKey = config.client.apiKey;
  }

  callback(null, config);
};

module.exports = EnrichClientConfigStrategy;
