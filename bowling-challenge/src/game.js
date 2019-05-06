'use strict'

function Game(){
  this.frame = []
  this.frames = []
};

Game.prototype.ball1 = function(pins){
  this.frame.push(pins);
};

Game.prototype.ball2 = function(pins){
  this.frame.push(pins);
  this.frames.push(this.frame);
  this.frame = [];
};

Game.prototype.framesPlayed = function() {
  return this.frames.length;
};

Game.prototype.score = function () {
  var scores = this.frames.flat(1)
  var reducer = (total, score) => total + score;
  return scores.reduce(reducer)
};
