'use strict';

function Game(){
  this._frames = [];
  this.score = 0;
  this._MAX_FRAMES = 10
}

Game.prototype.roll = function(rolls) {
  var frame = new Frame(rolls);
  frame.calculateScore();
  this._frames.push(frame);
};

Game.prototype.totalScore = function() {
  for (var i = 0; i < this._frames.length; i++) {
    this.score += this._frames[i]._score;
  }
  return this.score;
};

Game.prototype.framesPlayed = function(){
  return this._frames.length;
};
