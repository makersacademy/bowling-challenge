'use strict';

function Scorecard() {
  this.currentRoll = 0;
  this.frameScore = [];
};

Scorecard.prototype.roll = function (knockedPins) {
  this.currentRoll++;
  this.frameScore.push(knockedPins);
};
