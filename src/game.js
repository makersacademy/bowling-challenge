'use strict';

function Game() {
  this._rollsThisFrame = []
  this._scoreThisFrame = 0
  this._allFrames = []
  this._currentFrame = 1
  this._totalScore = 0
}

Game.prototype.recordRoll = function(numberOfPins) {
  this.validateRoll(numberOfPins);
  this._rollsThisFrame.push(numberOfPins);
  this._scoreThisFrame += numberOfPins;
  this._totalScore += numberOfPins;
  this.checkFrame();
  return numberOfPins;
};

Game.prototype.validateRoll = function(numberOfPins) {
  if (numberOfPins > 10) {
    throw "Maximum of 10 pins per roll";
  } else if (this._rollsThisFrame[0] + numberOfPins > 10) {
    throw "Maximum of 10 pins per frame";
  } else { return };
};

Game.prototype.checkFrame = function() {
  if (this._rollsThisFrame.length === 2 && this._scoreThisFrame < 10) {
    this.incrementFrame()
  } else if (this._rollsThisFrame.length === 2 && this._scoreThisFrame === 10) {
    this._rollsThisFrame[1] = '/';
    this.incrementFrame()
  } else if (this._rollsThisFrame[0] === 10) {
    this._rollsThisFrame[0] = 'X';
    this.incrementFrame()
  } else {
    return;
  };
};

Game.prototype.incrementFrame = function() {
  this._allFrames.push({ rolls: this._rollsThisFrame,
    score: this._scoreThisFrame });
  this._currentFrame++;
  this._rollsThisFrame = [];
  this._scoreThisFrame = 0;
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
