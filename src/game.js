"use strict";

function Game(frame) {
  this._score = 0;
  this._completedFrames = [];
  this.currentFrame = frame;
}

Game.prototype.logRoll = function (pins) {
  this.currentFrame.logRoll(pins);
};

Game.prototype.logFrameScore = function (frame) {
  this._score += frame.getScore();
};

Game.prototype.addFrame = function (newFrame) {
  if (this.currentFrame.isComplete()) {
    this._completedFrames.push(this.currentFrame);
    this.currentFrame = newFrame;
  }
};

Game.prototype.addBonus = function (newFrame) {
  var lastFrame = this._completedFrames.slice(-1)[0];
  if (lastFrame.isStrike() || lastFrame.isSpare()) {
    this._score += newFrame.getScore();
  }
};

Game.prototype.getScore = function () {
  return this._score
};
