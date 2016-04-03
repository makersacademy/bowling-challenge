"use strict";

function Game(frame) {
  this._score = 0;
  this._completedFrames = [];
  this.currentFrame = frame;
}

Game.prototype.logRoll = function (pins) {
  this.currentFrame.logRoll(pins);
  if (this._completedFrames.length > 0) {
    this.addSpareBonus(pins);
  }
};

Game.prototype.logFrameScore = function (frame) {
  this._score += frame.getScore();
  if (this._completedFrames.length > 0) {
    this.addStrikeBonus(frame);
  }
};

Game.prototype.saveFrame = function (frame) {
  if (this.currentFrame.isComplete()) {
    this._completedFrames.push(this.currentFrame);
  }
}

Game.prototype.addFrame = function (newFrame) {
  this.currentFrame = newFrame;
};

Game.prototype.addStrikeBonus = function (newFrame) {
  if (this._completedFrames.slice(-1)[0].isStrike()) {
    this._score += newFrame.getScore();
  }
};

Game.prototype.addSpareBonus = function (pins) {
  if (this._completedFrames.slice(-1)[0].isSpare()) {
    this._score += pins;
  }
}

Game.prototype.isOver = function () {
  return this._completedFrames.length === 10;
};

Game.prototype.getScore = function () {
  return this._score
};
