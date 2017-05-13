'use strict';

/**
 * Represents a strategy that when used dumps
 * the config to the provided logger.
 *
 * @class
 */
function DebugConfigStrategy(logger, section) {
  this.logger = logger;
  this.section = section;
}

DebugConfigStrategy.prototype.process = function (config, callback) {
  var friendlyFormat = JSON.stringify(config, null, 4);
  this.logger.debug(this.section + ':\n' + friendlyFormat + '\n');
  callback(null, config);
};

module.exports = DebugConfigStrategy;
