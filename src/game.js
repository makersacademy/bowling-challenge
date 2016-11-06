'use strict';

function Game() {
  this.totalScore = 0;
  this.currentFrame = new Frame();
  this.allFrames = [];
  this.frameNum = 1
}

Game.prototype.recordRoll = function(pins) {
  if (this.isOver()) {
    throw new Error('Game over, please start a new game')
  }
  this.currentFrame.bowl(pins);
  if (this.currentFrame.isEndFrame()) {
    this.nextFrame();
  }
};

Game.prototype.nextFrame = function() {
  this.addScore();
  this.currentFrame = new Frame();
  this.frameNum += 1
};

Game.prototype.addScore = function() {
  this.allFrames.push(this.currentFrame);
  this.totalScore += this.currentFrame.score;
};

Game.prototype.isOver = function() {
  return this.allFrames.length === 10
};

Game.prototype.gameOver = function() {
  console.log('Game Over');
};
