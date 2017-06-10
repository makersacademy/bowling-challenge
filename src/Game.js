'use strict'

var Game = function() {
  this.score = 0;
}

Game.prototype.roll = function (pins) {
  this.score += pins;
};
