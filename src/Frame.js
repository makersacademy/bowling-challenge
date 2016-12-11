'use strict';

function Frame(knockedPins) {
  this.rollNumber = 0
  this.rollOne = knockedPins
  this.rollTwo = 0
  this.rollThree = 0
  this.isStrike = false
  this.isSpare = false
  this.totalScore = 0
}

Frame.prototype.checkStrike = function(knockedPins) {
  if (knockedPins === 10) {
    this.isStrike = true
    this.rollNumber = 2
  };
};

Frame.prototype.checkSpare = function(knockedPins) {
  if ((this.rollOne + knockedPins) === 10) {
    this.isSpare = true
  };
};
