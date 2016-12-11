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

Frame.prototype.checkFinalRoll = function(knockedPins) {
  if ((this.rollOne + this.rollTwo) !== 10) {
    // game.calculateFinalScore()
    return "Game has ended"
    //this should be linked to calculating the final score
    //in Game
  };
};

Frame.prototype.tenthFrame = function(knockedPins) {
  if (this.rollNumber === 0) {
    this.rollNumber += 1
    this.rollOne = knockedPins
    this.checkStrike(knockedPins)
  } else if (this.rollNumber === 1) {
    this.rollNumber += 1
    this.rollTwo = knockedPins
    this.checkSpare(knockedPins)
    return this.checkFinalRoll(knockedPins)
  } else if ((this.rollNumber === 2) && (this.isStrike || this.isSpare)) {
    this.rollNumber = 3
    this.rollThree = knockedPins
    return "Game has ended"; //this should be linked to calculating the final
    //score in Game.
  };
};
