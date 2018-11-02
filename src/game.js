'use strict';

function Game() {
  this._rollsThisFrame = []
  this._allFrames = []
  this._currentFrame = 1
  this._totalScore = 0
}

Game.prototype.recordRoll = function(numberOfPins) {
  if (numberOfPins > 10) {
    throw "Maximum of 10 pins per roll";
  } else if (this._rollsThisFrame[0] + numberOfPins > 10) {
    throw "Limit of 10 pins knocked down per frame";
  } else {
    this._rollsThisFrame.push(numberOfPins);
    this._totalScore += numberOfPins
    this.checkFrame()
  }
  return numberOfPins;
};

Game.prototype.checkFrame = function() {
  if (this._rollsThisFrame.length === 2 || this._rollsThisFrame[0] === 10) {
    this._allFrames.push(this._rollsThisFrame);
    this._currentFrame++;
    this._rollsThisFrame = [];
  } else {
    return;
  };
};

Game.prototype.score = function() {
  return this._totalScore;
};

Game.prototype.whichFrame = function() {
  return this._currentFrame;
};

Game.prototype.allFrames = function() {
  return this._allFrames;
};

Game.prototype.thisFrame = function() {
  return this._rollsThisFrame;
};
