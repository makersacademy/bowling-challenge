'use strict';

function Scorecard(){
  this.total = 0;
  this.frame = 1;
  this.turn  = 1;
}

Scorecard.prototype.getCurrentScore = function () {
  return this.total;
}

Scorecard.prototype.getCurrentFrame = function () {
  return this.frame;
}

Scorecard.prototype.getCurrentTurn = function () {
  return this.turn;
}

module.exports = Scorecard;
