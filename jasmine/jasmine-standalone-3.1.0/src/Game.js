'use strict';

function Game() {
  this.MAX_ROLLS = 2;
  
  this.frames = [];
  this.rolls = 0
}

Game.prototype.getFrames = function() {
  return this.frames
};

Game.prototype.roll = function() {
  this.rolls += 1;

  // 2 rolls = a completed Frame
  if (this.rolls === this.MAX_ROLLS) {
    this.frames.push('X');
    this.rolls = 0;
  }
  return this.rolls;
};
