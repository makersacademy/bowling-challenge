"use strict";

function Game() {
  this.DEFAULT = 0
  this.score = this.DEFAULT;
  this.roundNumber = this.DEFAULT;
  this.fullScores = [];
  this.roundScore = [];
  this.roundTotal = this.DEFAULT;
  this.lastRound = [];
  this.lastRoundTotal = this.DEFAULT;
  this.totalScore = this.DEFAULT;
}

Game.prototype.getScore = function(){
  return this.score;
}

Game.prototype.getTotalScore = function(){
  return this.totalScore;
}

Game.prototype.bowl = function() {
  this.score = this._number();
  this._addRoundNumber();
  this._addToRoundScore();
  this._addTotalScore();
  if (this.roundScore.length === 2){
  this._addToFullScores();
  this.lastRound = this.fullScores[this.fullScores.length -1];
  this.roundTotal = (this.roundScore[0] + this.roundScore[1]);
  this.roundScore = []
  }
  return this.score;
}

Game.prototype.getRoundNumber = function() {
  return this.roundNumber;
}

Game.prototype.getRoundTotal = function() {
  return this.roundTotal;
}

Game.prototype.getRoundScore = function() {
  return this.fullScores[this.roundNumber - 1];
}

Game.prototype.getFullScores = function() {
  return this.fullScores;
}

Game.prototype.getLastRound = function() {
  return this.lastRound;
}

Game.prototype._number = function(){
  var pinsleft = (10 - this.score)
  if (this.roundNumber % 1 === 0) {
  return Math.round(Math.random()*10);
  }
  else {
    return Math.round(Math.random()*pinsleft);
  }
}

Game.prototype._addRoundNumber = function() {
  this.roundNumber += 0.5;
}

Game.prototype._addToRoundScore = function() {
  this.roundScore.push(this.score);
}

Game.prototype._addToFullScores = function() {
  this.fullScores.push(this.roundScore);
}

Game.prototype._addTotalScore = function() {
   if ( this.roundTotal === 10 ) {
    this.totalScore += (this.score * 2) ;
   }
   else {
   this.totalScore += this.score;
   }
}
