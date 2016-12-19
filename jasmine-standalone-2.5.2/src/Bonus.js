'use strict';

function Bonus() {
  this.score = [];
}

Bonus.prototype.addToBonus = function (pins) {
  this.score.push(pins);
}

Bonus.prototype.getScore = function() {
  return this.score.reduce((a, b) => a + b, 0);
}

Bonus.prototype.isOver = function() {
  return this.score.length === 1;
}
