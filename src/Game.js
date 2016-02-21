"use strict";

function Game() {
  this.score = 0;
  this.roundNumber = 0;
  this.fullScores = [];
}

Game.prototype.getScore = function(){
  return this.score;
}

Game.prototype.bowl = function() {
  this._addRoundNumber();
  this._addToFullScores();
  return this.score += this._number();
}

Game.prototype.getRoundNumber = function(){
  return this.roundNumber;
}

Game.prototype.getRoundScore = function(){
  return this.roundScore;
}

Game.prototype.getFullScores = function() {
  return this.fullScores;
}

Game.prototype._number = function(){
  return Math.round(Math.random()*10);
}

Game.prototype._addRoundNumber = function(){
  this.roundNumber += 0.5;
}

Game.prototype._addToFullScores = function(){
  this.fullScores.push(this._number());
}
