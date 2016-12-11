'use strict';

function Frame(knockedPins) {
  this.rollNumber = 0
  this.rollOne = knockedPins
  this.rollTwo = 0
  this.isStrike = false
  this.isSpare = false
}

Frame.prototype.checkStrike = function(knockedPins) {
  if (knockedPins === 10) {
    this.isStrike = true
    this.rollNumber = 2
  };
};

Frame.prototype.checkSpare = function() {
  if ((this.rollOne + this.rollTwo) === 10) {
    this.isSpare = true
  };
};
