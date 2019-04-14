'use strict';

function Game() {
  this.pinRolls = [];
  this.frameIndex = 1;
};

Game.prototype.addPinRolls = function(rolls) {
  this.pinRolls = rolls;
};

Game.prototype.getFinalScore = function() {
  return this.pinRolls.reduce((prevScore, currentScore) => {
    if (this.frameIndex >= 10) return prevScore + currentScore;
    return prevScore + currentScore;
  }, 0);
};

Game.prototype.strike = function(pins) {
  return pins === 10;
};