'use strict';

var BowlingScorecard = function() {
  this.knockedDownPins = 0;
  // this.frame = []
};

BowlingScorecard.prototype.getCurrentRollScore = function() {
  return this.knockedDownPins;
};

BowlingScorecard.prototype.rollScore = function(knockedDownPins) {
  return this.knockedDownPins += knockedDownPins;
};

// BowlingScorecard.prototype.frameScore = function() {
//   return this.frame.push(this.knocked_down_pins);
// };
