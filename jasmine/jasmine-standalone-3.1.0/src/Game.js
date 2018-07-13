'use strict';

function Game() {
  this.frames = [];
  this.rolls = 0
}

Game.prototype.getFrames = function() {
  return this.frames
};

Game.prototype.roll = function() {
 this.rolls += 1;

  if (this.rolls === 2) {
    this.frames.push('X');
    this.rolls = 0;
  }
  return this.rolls;
};
