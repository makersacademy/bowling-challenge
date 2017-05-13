'use strict';

var async = require('async');
var strategy = require('./strategy');

var Config = require('./Config');

/**
 * ConfigLoader
 * Represents a configuration loader that loads a configuration through a list of strategies.
 *
 * @constructor
 */
function ConfigLoader(strategies, logger) {
  this.strategies = [];

  if (logger) {
    if (typeof logger.debug !== 'function') {
      throw new Error('Provided logger is required to have method debug().');
    }
    this.logger = logger;
  }

  if (strategies && !(strategies instanceof Array)) {
    throw new Error('Argument \'strategies\' must be an array.');
  }

  for (var i = 0; i < strategies.length; i++) {
    this.add(strategies[i]);
  }
}

ConfigLoader.prototype.add = function (item) {
  if (!item || typeof item.process !== 'function') {
    throw new Error('Unable to add strategy. Strategy is either empty or missing required method \'process\'.');
  }

  if (this.logger) {
    if (typeof item.setLogger === 'function') {
      item.setLogger(this.logger);
    }
    this.strategies.push(new strategy.DebugConfigStrategy(this.logger, 'Before:' + item.constructor.name));
  }

  this.strategies.push(item);
};

ConfigLoader.prototype.prepend = function (item) {
  if (!item || typeof item.process !== 'function') {
    throw new Error('Unable to prepend strategy. Strategy is either empty or missing required method \'process\'.');
  }

  if (this.logger) {
    if (typeof item.setLogger === 'function') {
      item.setLogger(this.logger);
    }
    this.strategies.unshift(new strategy.DebugConfigStrategy(this.logger, 'Before:' + item.constructor.name));
  }

  this.strategies.unshift(item);
};

ConfigLoader.prototype.load = function (callback) {
  var logger = this.logger;
  var strategies = this.strategies.slice();

  // Ensure that we always start out with a empty config object.
  strategies.unshift(new strategy.NullConfigStrategy(new Config()));

  var tasks = [];

  for (var i = 0; i < strategies.length; i++) {
    tasks.push(strategies[i].process.bind(strategies[i]));
  }

  async.waterfall(tasks, function (err, result) {
    if (logger) {
      if (err) {
        logger.debug('Error:\n' + JSON.stringify(err, null, 4) + '\n');
      } else {
        logger.debug('Result:\n' + JSON.stringify(result, null, 4) + '\n');
      }
    }
    callback(err, result);
  });
};

module.exports = ConfigLoader;
