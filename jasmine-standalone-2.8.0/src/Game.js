'use strict';

function Game() {
  this.score = 0;
  this.frameNumber = 1;
  this.currentFrame = new Frame()
  this.frames = [this.currentFrame]
};

Game.prototype.bowl = function(num) {
  this.manageFrame()
  this.currentFrame.bowl(num);
  this.score += num;
};

Game.prototype.manageFrame = function() {
  if (this.currentFrame.isFrameOver == true) {
    this.currentFrame = new Frame();
    this.frames.push(this.currentFrame);
    this.frameNumber += 1;
  };
};
