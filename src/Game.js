"use strict";

const MAX_FRAMES = 10
const MAX_ROLLS = 20
const MAX_PINS = 10

function Game(){
  this._rolls = [];
  this._currentRoll = 0;
  this._totalScore = 0;
}

Game.prototype.roll = function(pins){
  this._rolls.push(pins);
  this._currentRoll ++;
};

Game.prototype.resetGame = function(){
  this._rolls = [];
};

Game.prototype.calculateFrameScores = function(){
  var rollIndex = 0;

  for(var frameIndex = 0; frameIndex < MAX_FRAMES; frameIndex ++){
    if (frameIndex === 9 && this.isStrike(rollIndex)) {
      if (this._rolls[rollIndex+1] === 10) {
        this._totalScore += 10 + this._rolls[rollIndex+1] + this._rolls[rollIndex+2];
      } else {
      this._totalScore += 10 + this._rolls[rollIndex+1];
    }}
    else if (this.isStrike(rollIndex)) {
      this._totalScore += 10 + this._rolls[rollIndex+1] + this._rolls[rollIndex+2];
      rollIndex += 1;
    }
    else if (this.isSpare(rollIndex)) {
      this._totalScore += 10 + this._rolls[rollIndex+2];
      rollIndex += 2;
    }
    else {
      this._totalScore += this._rolls[rollIndex] + this._rolls[rollIndex+1];
      rollIndex += 2;
    }
    };
  return this._totalScore;

};

Game.prototype.isStrike = function(rollIndex){
  return this._rolls[rollIndex] === 10
};

Game.prototype.isSpare = function(rollIndex){
  return this._rolls[rollIndex] + this._rolls[rollIndex+1] === 10
};
