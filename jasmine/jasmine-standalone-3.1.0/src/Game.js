'use strict';

function Game() {
  this.MAX_ROLLS = 2;

  this._frames = [];
  this.rolls = 0;
  this.score = 0;
}

Game.prototype.addFrame = function(frame){
  this._frames.push(frame);
}

Game.prototype.getFrames = function() {
  return this._frames.length;
};

Game.prototype.roll = function(pins) {
  this.score += pins
  this.rolls += 1;

  // 2 rolls = a completed Frame
  if (this._frames.length <= 9 && this.rolls === this.MAX_ROLLS) {
    this._frames.push('X');
    this.rolls = 0;
  }
  return this.rolls;
};


Game.prototype.getPoints = function() {
  return this.score
};
