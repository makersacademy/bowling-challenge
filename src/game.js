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
    this.updateScore();
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

Game.prototype.addSpareBonus = function() {
  var i = this.frameNum - 2
  if(this.allFrames[i].isSpare()) {
    this.allFrames[i].score += this.currentFrame.rolls[0]
  }
};

Game.prototype.updateScore = function() {
  var scores = []
  var sum = 0
  var len = this.allFrames.length
  for(var k = 0; k < len; k++) { scores.push(this.allFrames[k].score) }
  for(var j = 0; j < len; j++) { sum += scores[j]; }
  this.totalScore = sum
};
