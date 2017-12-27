'use strict';

function Game() {
  this.score = 0;
  this.frameNumber = 1;
  this.currentFrame = new Frame();
  this.frames = [this.currentFrame];
  this.lastFrame = null;
};

Game.prototype.bowl = function(num) {
  console.log('bowling')
  console.log(this.frameNumber)
  this.currentFrame.bowl(num);
  this.score += num;
  this.manageFrame()
  console.log(this.score)
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
  this.frameNumber ++;
  if (this.frameNumber > 2) {
    this.frameBeforeLast = this.frames[this.frames.indexOf(this.currentFrame) - 2];
  }
}

Game.prototype.addBonus = function() {
  this.strikeBonus();
  this.spareBonus();
}

Game.prototype.strikeBonus = function() {
  if (this.lastFrame && this.lastFrame.isStrike) {
    this.lastFrame.score += this.currentFrame.score;
    this.score += this.currentFrame.score;
    this.consecutiveStrikesBonus()
  }
}

Game.prototype.spareBonus = function() {
  if (this.lastFrame && this.lastFrame.isSpare) {
    this.lastFrame.score += this.currentFrame.rollOneScore;
    this.score += this.currentFrame.rollOneScore;
  }
}

Game.prototype.consecutiveStrikesBonus = function() {
  if (this.frameBeforeLast && this.frameBeforeLast.isStrike) {
    this.frameBeforeLast.score += this.currentFrame.rollOneScore;
    this.score += this.currentFrame.rollOneScore;
  }
}
