'use strict';

var BowlingScorecard = function() {
  this.knockedDownPins = 0;
  this.frame = []
};

BowlingScorecard.prototype.getCurrentRollScore = function() {
  return this.knockedDownPins;
};

BowlingScorecard.prototype.rollScore = function(knockedDownPins) {
  this.knockedDownPins = knockedDownPins;
  this.frameScore();
};

BowlingScorecard.prototype.frameScore = function() {
  this.frame.push(this.knockedDownPins);
};
