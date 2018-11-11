'use strict';

function Scorecard(){
  this.STRIKE_SCORE = 10;
  this.SPARE_SCORE = 10;
  this.score = 0;
  this.rolls = [];
  this.currentRoll = 0;
};

Scorecard.prototype.score = function() {
  return this._currScore;
};

Scorecard.prototype.roll = function (pins) {
  this.rolls[this.currentRoll++] = pins;
};
