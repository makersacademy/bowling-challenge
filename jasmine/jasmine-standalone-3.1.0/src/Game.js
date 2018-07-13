'use strict';

function Game() {
  this.MAX_ROLLS = 2;

  this.frames = [];
  this.rolls = 0;
  this.score = 0;
}

Game.prototype.addFrame = function(frame){
  this.frames.push(frame);
}

Game.prototype.getFrames = function() {
  return this.frames
};

Game.prototype.roll = function(pins) {
  this.score += pins
  this.rolls += 1;

  // 2 rolls = a completed Frame
  if (this.frames.length <= 9 && this.rolls === this.MAX_ROLLS) {
    this.frames.push('X');
    this.rolls = 0;
  }
  return this.rolls;
};


Game.prototype.getPoints = function() {
  return this.score
};
