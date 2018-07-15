"use strict";

function Game() {
  this.totalScore = 0;
  this.frames = [];
  this.currentFrame = [];
}

Game.prototype.enterScore = function (score) {
  this.currentFrame.push(score);
  this._checkIfFrameIsComplete();
};

Game.prototype._checkIfFrameIsComplete = function () {
  if (this.currentFrame.length === 2) {
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
    if(this._isPreviousFrameASpare(index)) {
      this._addBonusScore(index);
    }
    var frameScore =this._calculateFrameScore(index);
    this.totalScore += frameScore;
  }
};

Game.prototype._resetScore = function () {
  this.totalScore = 0;
};

Game.prototype._isPreviousFrameASpare = function (index) {
  return index > 0 && this.frames[index-1][0] + this.frames[index-1][1] === 10;
};

Game.prototype._addBonusScore = function (index) {
  this.totalScore += this.frames[index][0];
};

Game.prototype._calculateFrameScore = function (index) {
  return this.frames[index][0] + this.frames[index][1];
};
