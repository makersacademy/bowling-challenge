'use strict';

function Game() {
  this.pinRolls = [];
  this.frameIndex = 1;
};

Game.prototype.addPinRolls = function(rolls) {
  this.pinRolls = rolls;
};

Game.prototype.getFinalScore = function() {
  return this.pinRolls.reduce((prevScore, currentScore, currentIndex, pins) => {

    if (this.frameIndex >= 10) return prevScore + currentScore;
    
    if (this.strike(currentScore)) {
      this.frameIndex += 1;
      return prevScore + currentScore + pins[currentIndex + 1] + pins[currentIndex + 2];
    }
    return prevScore + currentScore;
  }, 0);
};

Game.prototype.strike = function(pins) {
  return pins === 10;
};