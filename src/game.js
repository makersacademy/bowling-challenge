"use strict";

function Game() {
  this._totalScore = 0;
  this.frames = [];
  this.currentFrame = [];
}

Game.prototype.enterScore = function (score) {
  this.currentFrame.push(score);
  this._checkIfFrameIsComplete();
};

Game.prototype.returnScore = function () {
  return this._totalScore;
};

Game.prototype._checkIfFrameIsComplete = function () {
  if (this.currentFrame.length === 2 || this.currentFrame[0] === 10) {
    this._addCurrentFrameToTotal();
    this._resetCurrentFrame();
    this._calculateTotalScore();
  }
};

Game.prototype._addCurrentFrameToTotal = function () {
  this.frames.push(this.currentFrame);
};

Game.prototype._resetCurrentFrame = function () {
  this.currentFrame = [];
};

Game.prototype._calculateTotalScore = function () {
  this._resetScore();
  for (var index in this.frames) {
    if(this._isPreviousFrameAStrike(index)) {
      this._addBonusScore(index);
    } else if(this._isPreviousFrameASpare(index)) {
      this._addBonusScore(index);
    }
    var frameScore =this._calculateFrameScore(index);
    this._totalScore += frameScore;
  }
};

Game.prototype._resetScore = function () {
  this._totalScore = 0;
};

Game.prototype._isPreviousFrameASpare = function (index) {
  return index > 0 && this.frames[index-1][0] + this.frames[index-1][1] === 10;
};

Game.prototype._isPreviousFrameAStrike = function (index) {
  return index > 0 && this.frames[index-1].length === 1;
};

Game.prototype._addBonusScore = function (index) {
  if(this.frames[index-1].length === 1) {
    this._totalScore += this._calculateFrameScore(index);
  } else {
    this._totalScore += this.frames[index][0];
  }
};

Game.prototype._calculateFrameScore = function (index) {
  if(this.frames[index].length === 1){
    return this.frames[index][0];
  } else {
    return this.frames[index][0] + this.frames[index][1];
  }
};
