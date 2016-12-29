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

Frame.prototype = {

  checkStrike: function(knockedPins) {
  if (knockedPins === 10) {
    this.isStrike = true
    this.rollNumber = 2
  }
},

  checkSpare: function(knockedPins) {
    if ((this.rollOne + knockedPins) === 10) {
      this.isSpare = true
    }
  },

  _checkFinalRoll: function(knockedPins) {
    if ((this.rollOne + this.rollTwo !== 10 ||
         this.rollOne + this.rollTwo !== 20) &&
         this.isStrike === false && this.isSpare === false) {
      this.isfinished = true
      return "Game has ended"
    }
  },

  tenthFrame: function(knockedPins) {
    if (this.rollNumber === 0) {
      this.tenthFrameFirstRoll(knockedPins);
    } else if (this.rollNumber === 1 || this.rollNumber === 2) {
       return this.tenthFrameSecondRoll(knockedPins);
    }
  },

  tenthFrameFirstRoll: function(knockedPins) {
    this.rollNumber += 1
    this.rollOne = knockedPins
    this.checkStrike(knockedPins)
  },

  tenthFrameSecondRoll: function(knockedPins) {
    this.rollNumber += 1
    this.rollTwo = knockedPins
    this.totalScore = (this.rollOne + this.rollTwo)
    this.checkSpare(knockedPins)
    return this._checkFinalRoll(knockedPins)
  }

};
