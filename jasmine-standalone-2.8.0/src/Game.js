'use strict';

function Game() {
  this.score = 0;
  this.frameNumber = 1;
  this.currentFrame = new Frame()
  this.frames = [this.currentFrame]
  this.lastFrame = null
};

Game.prototype.bowl = function(num) {
  console.log("bowling " + num)
  this.currentFrame.bowl(num);
  this.score += num;
  this.manageFrame()
  console.log(this.frames)
  console.log("frame" + this.frameNumber)
};

Game.prototype.manageFrame = function() {
  if (this.currentFrame.isFrameOver === true) {
    this.addBonus()
    this.currentFrame = new Frame();
    this.frames.push(this.currentFrame);
    this.lastFrame = this.frames[this.frames.indexOf(this.currentFrame) - 1]
    this.frameNumber += 1;
  };
};

Game.prototype.addBonus = function() {
  console.log("last frame is " + this.lastFrame)
  if (this.lastFrame && this.lastFrame.isStrike) {
    console.log("adding strike bonus")
    this.lastFrame.score += this.currentFrame.score;
    this.score += this.currentFrame.score;
  }
  if (this.lastFrame && this.lastFrame.isSpare) {
    console.log("adding spare bonus")
    this.lastFrame.score += this.currentFrame.rollOneScore;
    this.score += this.currentFrame.rollOneScore;
  }
}
