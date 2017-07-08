'use strict';

function Roll() {}

Roll.prototype.randomInt = function(remainder) {
  var max = Math.round(remainder);
  return Math.round(Math.random() * (max));
};

Roll.prototype.score = function(remainder) {
  return this.randomInt(remainder);
};
