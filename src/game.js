"use strict";

function Game(frame) {
  this._scores = [];
  this._completedFrames = [];
  this.currentFrame = frame;
}

Game.prototype.logRoll = function (pins) {
  this.currentFrame.logRoll(pins);
  this.logFrameScore(this.currentFrame);
};

Game.prototype.logFrameScore = function (frame) {
  this._scores.push(frame.getScore())
};

Game.prototype.addFrame = function (newFrame) {
  if (this.currentFrame.isComplete()) {
    this._completedFrames.push(this.currentFrame);
    this.currentFrame = newFrame;
  }
};

Game.prototype.sumScore = function () {
  if (this._scores.length < 1) { return 0; }
  return this._scores.reduce(function (sum, score) {
    return sum + score;
  });
};
