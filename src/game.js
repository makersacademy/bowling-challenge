'use strict';

function Game() {
  this.totalScore = 0;
  this.currentFrame = new Frame();
  this.oldFrames = [];
  this.frameNumber = this.calculateFrameNumber();
};

Game.prototype.bowl = function(score) {
  this.currentFrame.addScore(score);
  this.checkFrameChange();
};

Game.prototype.checkFrameChange = function() {
  if (this.currentFrame.isOver) {
    this.oldFrames.unshift(this.currentFrame)
    this.currentFrame = new Frame;
  }
};

Game.prototype.calculateScore = function() {
  this.totalScore = 0
  for (var i = 0; i < this.oldFrames.length; i++) {
    this.totalScore += this.oldFrames[i].score
  }
  this.totalScore += this.currentFrame.score
  return this.totalScore
};

Game.prototype.calculateFrameNumber = function() {
  for (var i = 1; i <= this.oldFrames.length; i++) {
    this.frameNumber += 1
  }
  return this.frameNumber
};
