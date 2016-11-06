'use strict';

function Game() {
  this.totalScore = 0;
  this.frame = new Frame();
  this.frameRolls = [];
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
  
};
