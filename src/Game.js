"use strict";

function Game() {
  this.STARTING_SCORE = 0;
  this.score = this.STARTING_SCORE;
  this.total = this.score;
};

Game.prototype.totalScore = function(){
  return this.score
}

Game.prototype.currentScore = function(){
  return this.score += this.bowl();
}

Game.prototype.bowl = function(){
  return this._number();
}


Game.prototype._number = function() {
  return Math.round(Math.random()*10);
}
