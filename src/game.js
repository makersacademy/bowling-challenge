'use strict';

function Game() {
  this._rollsThisFrame = []
  this._allFrames = []
  this._currentFrame = 0
  this._totalScore = 0
}

Game.prototype.recordRoll = function(numberOfPins) {
  if (this._rollsThisFrame.length >= 2) {
    throw "Limit of two rolls per frame";
  } else if (numberOfPins > 10) {
    throw "Maximum of 10 pins per roll";
  } else if (this._rollsThisFrame[0] + numberOfPins > 10) {
    throw "Limit of 10 pins knocked down per frame";
  } else {
    this._rollsThisFrame.push(numberOfPins);
    this._totalScore += numberOfPins
  }
  return numberOfPins;
};

Game.prototype.score = function() {
  return this._totalScore;
};

Game.prototype.whichFrame = function() {
  return this._currentFrame;
};

Game.prototype.showFrames = function () {
  return this._allFrames;
};

Game.prototype.thisFrame = function () {
  return this._rollsThisFrame;
};
