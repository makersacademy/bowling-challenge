'use strict';

/**
 * Represents a strategy that that returns an empty object (pre loading).
 *
 * @class
 */
function NullConfigStrategy (nullObject) {
  this.nullObject = nullObject;
}

NullConfigStrategy.prototype.process = function (callback) {
  callback(null, this.nullObject);
};

module.exports = NullConfigStrategy;
