'use strict';

function Game(currentFrame = new Frame()) {
  this.frames = [];
  this.currentFrame = currentFrame;
  this.frameIndex = 1;
  this.addFrame();
};

Game.prototype.bowl = function (pins) {
  this.currentFrame.bowl(pins);
  if (this.frameIndex < 10) {
    if (this.currentFrame.isStrike() || this.currentFrame.bowlIndex > 2) {
      this.nextFrame();
    };
  } else {
    this.currentFrame.finalFrame = true
  };
};

Game.prototype.score = function () {
  var score = 0;

  if (this.currentFrame.finalFrame) {
    for (var index = 0; index < this.frameIndex; index++)
      score += this.frames[index].FrameScore();
  } else {
    for (var index = 0; index < this.frameIndex-1; index++)
      score += this.frames[index].FrameScore();
  };
  return score;
};

Game.prototype.addFrame = function () {
  this.frames.push(this.currentFrame);
};

Game.prototype.nextFrame = function () {
  this.currentFrame = new Frame();
  this.addFrame();
  this.frameIndex++;
};
