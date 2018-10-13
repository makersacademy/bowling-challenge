'use strict';

function Scorecard() {
  this.currentRoll = 0;
  this.frameScore = [];
};

Scorecard.prototype.roll = function(knockedPins) {
  this.currentRoll++;
  this.frameScore.push(knockedPins);
};

Scorecard.prototype.getFrameScore = function() {
  return this.frameScore;
};

Scorecard.prototype.getCurrentRoll = function() {
  return this.currentRoll;
};
