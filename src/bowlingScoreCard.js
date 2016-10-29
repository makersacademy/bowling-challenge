'use strict';

function Scorecard(){
  this.total = 0;
  this.frameTotal = 0;
  this.frame = 1;
  this.turn  = 1;
}

Scorecard.prototype.getCurrentScore = function () {
  return this.total;
}

Scorecard.prototype.getFrameScore = function () {
  return this.frameTotal;
}

Scorecard.prototype.getCurrentFrame = function () {
  return this.frame;
}

Scorecard.prototype.getCurrentTurn = function () {
  return this.turn;
}

Scorecard.prototype.updateScore = function (number) {
  this.total += number;
  this.frameTotal += number;
}



module.exports = Scorecard;
