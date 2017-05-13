'use strict';

var fs = require('fs');
var extend = require('../helpers/clone-extend').extend;
var propsParser = require('properties-parser');
var expandHomeDir = require('../helpers/expand-home-dir');

/**
 * Represents a strategy that loads API keys from a .properties file into the configuration.
 *
 * @class
 */
function LoadAPIKeyConfigStrategy (filePath, mustExist) {
  this.filePath = filePath;
  this.mustExist = mustExist || false;
}

LoadAPIKeyConfigStrategy.prototype.process = function (config, callback) {
  var mustExist = this.mustExist;
  var filePath = expandHomeDir(this.filePath);

  // In case we don't have a home path but specified a '~' in our path...
  if (filePath === false) {
    if (mustExist) {
      return callback(new Error("Unable to load '" + this.filePath + "'. Environment home not set."));
    }
    return callback(null, config);
  }

  fs.exists(filePath, function (exist) {
    if (!exist) {
      if (mustExist) {
        callback(new Error('Client API key file not found: ' + filePath));
      } else {
        callback(null, config);
      }
    } else {
      // Extend config with default client apiKey fields.
      extend(config, {
        client: {
          apiKey: {}
        }
      });

      if (!mustExist && config.client.apiKey.id && config.client.apiKey.secret) {
        return callback(null, config);
      }

      propsParser.read(filePath, function (err, result) {
        if (err) {
          return callback(err);
        }

        if (!result) {
          result = {};
        }

        // If we don't require the file to exist and if the key
        // file is empty, then just ignore it.
        if (!mustExist && Object.keys(result).length === 0) {
          return callback(null, config);
        }

        var apiKeyId = result['apiKey.id'];
        var apiKeySecret = result['apiKey.secret'];

        if (!apiKeyId || !apiKeySecret) {
          return callback(new Error('Unable to read properties file: ' + filePath));
        }

        config.client.apiKey.id = apiKeyId;
        config.client.apiKey.secret = apiKeySecret;

        callback(null, config);
      });
    }
  });
};

module.exports = LoadAPIKeyConfigStrategy;
