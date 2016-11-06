'use strict';

function Game() {
  this.totalScore = 0;
  this.frame = new Frame();
  this.frameRolls = [];
  this.frameNum = 1
}

Game.prototype.recordRoll = function(pins) {
  if (this.isOver()) {
    throw new Error('Game over, please start a new game')
  }
  this.frame.bowl(pins);
  if (this.frame.isEndFrame()) {
    this.nextFrame();
  }
};

Game.prototype.nextFrame = function() {
  this.addScore();
  this.frame = new Frame();
  this.frameNum += 1
};

Game.prototype.addScore = function() {
  this.frameRolls.push(this.frame.rolls);
  this.totalScore += this.frame.score;
};

Game.prototype.isOver = function() {
  return this.frameRolls.length === 10
};

Game.prototype.gameOver = function() {
  console.log('Game Over');
};

Game.prototype.isStrike = function() {
  return this.frameRolls[this.frameNum - 2][0] === 10
};

Game.prototype.isSpare = function() {
  return this.frameRolls[this.frameNum - 2][0] +
        this.frameRolls[this.frameNum - 2][1] === 10
};
