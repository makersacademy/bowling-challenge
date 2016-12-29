"use strict";

function Frame(knockedPins) {
  this.rollNumber = 0
  this.rollOne = knockedPins
  this.rollTwo = 0
  this.isStrike = false
  this.isSpare = false
  this.totalScore = 0
  this.finished = false
}

Frame.prototype.checkStrike = function(knockedPins) {
  if (knockedPins === 10) {
    this.isStrike = true
    this.rollNumber = 2
  }
};

Frame.prototype.checkSpare = function(knockedPins) {
  if ((this.rollOne + knockedPins) === 10) {
    this.isSpare = true
  }
};

Frame.prototype._checkFinalRoll = function(knockedPins) {
  if ((this.rollOne + this.rollTwo !== 10 ||
       this.rollOne + this.rollTwo !== 20) &&
       this.isStrike === false && this.isSpare === false) {
    this.isfinished = true
    return "Game has ended"
  }
};

Frame.prototype.tenthFrame = function(knockedPins) {
  if (this.rollNumber === 0) {
    this.rollNumber += 1
    this.rollOne = knockedPins
    this.checkStrike(knockedPins)
} else if (this.rollNumber === 1 || this.rollNumber === 2) {
    this.rollNumber += 1
    this.rollTwo = knockedPins
    this.totalScore = (this.rollOne + this.rollTwo)
    this.checkSpare(knockedPins)
    return this._checkFinalRoll(knockedPins)
  }


};
