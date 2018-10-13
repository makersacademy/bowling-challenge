'use strict';

function Scorecard() {
  this.currentRoll = 0;
  this.pointsTracker = [];
};

Scorecard.prototype.roll = function(knockedPins) {
  this.pointsTracker[this.currentRoll++] = knockedPins;
};

Scorecard.prototype.getPointsTracker = function() {
  return this.pointsTracker;
};

Scorecard.prototype.getCurrentRoll = function() {
  return this.currentRoll;
};

Scorecard.prototype.isStrike = function() {
  var frameIndex = 0;
  return this.pointsTracker[frameIndex] === 10;
};

Scorecard.prototype.isSpare = function() {
  var frameIndex = 0;
  return this.pointsTracker[frameIndex] + this.pointsTracker[frameIndex + 1] === 10;
};
