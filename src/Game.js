'use strict'

var Game = function() {
  this.rolls = 0;
}

Game.prototype.roll = function (pins) {
  this.rolls = pins;
};

Game.prototype.score = function () {
  var result = 0;
  result += this.rolls;
  return result;
};
