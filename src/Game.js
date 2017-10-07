'use strict';

function Game(){
  this._frames = [];
  this.score = 0;
  this._MAX_FRAMES = 10;
  this.active = true;
}

Game.prototype.roll = function(rolls) {
  if (this.isActive()) {
    var frame = new Frame(rolls);
    frame.calculateScore();
    this._frames.push(frame);
    this.update()
  } else {
    throw new Error('Game is finished')
  }
};

Game.prototype.totalScore = function() {
  this.score = 0
  for (var i = 0; i < this._frames.length; i++) {
    this.score += this._frames[i]._score;
  }
  return this.score;
};

Game.prototype.framesPlayed = function(){
  return this._frames.length;
};

Game.prototype.framesLeft = function(){
  return this._MAX_FRAMES - this.framesPlayed();
};

Game.prototype.update = function(){
  this.totalScore();
  if (this.framesLeft() === 0) {
    this.active = false;
  }
};

Game.prototype.isActive = function() {
  return this.active;
};
