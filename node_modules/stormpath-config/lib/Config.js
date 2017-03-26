var deepCopy = require('lodash').deepCopy;

function Config() {
}

Config.prototype.clone = function () {
  return deepCopy(this);
};

Config.prototype.toString = function () {
  return JSON.stringify(this, null, 4);
};

module.exports = Config;
