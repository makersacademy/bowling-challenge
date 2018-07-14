'use strict';

function Game() {
  this.MAX_ROLLS = 2;

  this._frames = [];
  this._rolls = 0;
  this.pinsHit = 0;
  // this._score = 0;

  this.calculate = new CalculateScore();
}

Game.prototype.addFrame = function(frame){
  this._frames.push(frame);
}

Game.prototype.getFrames = function() {
  return this._frames.length;
};

Game.prototype.roll = function(pins) {
  if (this._rolls === 0) {
    this.pinsHit += pins;
    this._rolls += 1;
    return "roll again"
  } else {
    this.pinsHit += pins;
    this.calculate.calculateScore(this.pinsHit);
    this._rolls += 1;
    this.pinsHit = 0;
  }

  // 2 rolls = a completed Frame
  if (this._frames.length <= 9 && this._rolls === this.MAX_ROLLS) {
    this._frames.push('X');
    this._rolls = 0;
  }
  return this._rolls;
};

Game.prototype.score = function() {
  // return this._score
  return this.calculate.getScore();
};

// Game.prototype.score2 = function() {
//   // return this._score
//   return this.calculate.score;
// };
