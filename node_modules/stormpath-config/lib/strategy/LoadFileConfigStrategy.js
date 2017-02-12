'use strict';

var fs = require('fs');
var path = require('path');
var extend = require('../helpers/clone-extend').extend;
var parsers = require('./../parser');
var expandHomeDir = require('../helpers/expand-home-dir');

/**
 * Load File Config Strategy
 * Represents a strategy that loads configuration from either a JSON or YAML file into the configuration.
 * @constructor
 */
function LoadFileConfigStrategy (filePath, mustExist, encoding) {
  this.filePath = filePath;
  this.mustExist = mustExist || false;
  this.encoding = encoding || 'utf8';
}

LoadFileConfigStrategy.prototype.process = function (config, callback) {
  var outerScope = this;

  var mustExist = this.mustExist;
  var originalFilePath = this.filePath;
  var expandedFilePath = expandHomeDir(originalFilePath);

  // In case we don't have a home path but specified a '~' in our path...
  if (expandedFilePath === false) {
    if (mustExist) {
      return callback(new Error("Unable to load '" + originalFilePath + "'. Environment home not set."));
    }
    return callback(null, config);
  }

  var extension = path.extname(expandedFilePath).substring(1);
  var parser = parsers[extension];

  if (!parser) {
    return callback(new Error("Unable to load file '" + originalFilePath + "'. Extension '" + extension + "' not supported."));
  }

  fs.exists(expandedFilePath, function (exists) {
    if (!exists) {
      if (mustExist) {
        callback(new Error("Config file '" + originalFilePath + "' doesn't exist."));
      } else {
        callback(null, config);
      }
    } else {
      fs.readFile(expandedFilePath, { encoding: outerScope.encoding }, function (err, result) {
        if (err) {
          return callback(err);
        }

        parser(result, function (err, data) {
          if (err) {
            return callback(new Error("Error parsing file '" + expandedFilePath + "'.\nDetails: " + err));
          }

          if (data) {
            extend(config, data);
          }

          callback(null, config);
        });
      });
    }
  });
};

module.exports = LoadFileConfigStrategy;
