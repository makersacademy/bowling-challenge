'use strict';

function Frame(knockedPins) {
  this.bowlNumber = 0
  this.bowlOne = knockedPins
  this.bowlTwo = 0
  this.isStrike = false
  this.isSpare = false
  this.totalScore = 0
  this.finished = false
}

Frame.prototype = {

  checkStrike: function(knockedPins) {
    if (knockedPins === 10) {
      this.isStrike = true
      this.bowlNumber = 2
    }
  },

  checkSpare: function(knockedPins) {
    if ((this.bowlOne + knockedPins) === 10) {
      this.isSpare = true
    }
  },

  _checkFinalBowl: function(knockedPins) {
    if ((this.bowlOne + this.bowlTwo !== 10 ||
         this.bowlOne + this.bowlTwo !== 20) &&
         this.isStrike === false && this.isSpare === false) {
      this.isfinished = true
      return "Game Over"
    }
  },

  tenthFrame: function(knockedPins) {
    if (this.bowlNumber === 0) {
      this.tenthFrameFirstRoll(knockedPins);
    } else if (this.bowlNumber === 1 || this.bowlNumber === 2) {
      return this.tenthFrameSecondRoll(knockedPins);
    }
  },

  tenthFrameFirstRoll: function(knockedPins) {
    this.bowlNumber += 1
    this.bowlOne = knockedPins
    this.checkStrike(knockedPins)
  },

  tenthFrameSecondRoll: function(knockedPins) {
    this.bowlNumber += 1
    this.bowlTwo = knockedPins
    this.totalScore = (this.bowlOne + this.bowlTwo)
    this.checkSpare(knockedPins)
    return this._checkFinalBowl(knockedPins)
  }
  
};
