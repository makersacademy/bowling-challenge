'use strict';

function Scorecard(){
  this.gameScore = 0
};

Scorecard.prototype.roll = function (pins) {
  this.gameScore += pins;
};

Scorecard.prototype.score = function () {
  return this.gameScore;
};
