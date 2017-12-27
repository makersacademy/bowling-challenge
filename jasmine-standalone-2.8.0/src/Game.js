'use strict';

function Game() {
  this.score = 0;
  this.frameNumber = 1;
  this.currentFrame = new Frame();
  this.frames = [this.currentFrame];
  this.lastFrame = null;
};

Game.prototype.bowl = function(num) {
  this.currentFrame.bowl(num);
  this.score += num;
  this.manageFrame()
};

Game.prototype.manageFrame = function() {
  if (this.currentFrame.isFrameOver === true) {
    this.addBonus();
    this.createNewFrame();
  };
};

Game.prototype.createNewFrame = function() {
  this.currentFrame = new Frame();
  this.frames.push(this.currentFrame);
  this.lastFrame = this.frames[this.frames.indexOf(this.currentFrame) - 1];
  this.frameNumber += 1;
}

Game.prototype.addBonus = function() {
  this.strikeBonus();
  this.spareBonus();
}

Game.prototype.strikeBonus = function() {
  if (this.lastFrame && this.lastFrame.isStrike) {
    this.lastFrame.score += this.currentFrame.score;
    this.score += this.currentFrame.score;
  }
}

Game.prototype.spareBonus = function() {
  if (this.lastFrame && this.lastFrame.isSpare) {
    this.lastFrame.score += this.currentFrame.rollOneScore;
    this.score += this.currentFrame.rollOneScore;
  }
}
