'use strict';
// Game is responsible for recording the scores across 10 frames

var Game = function() {
  this.score = [];
  this.over = false;
  this.isStrike = false;
}

Game.prototype.recordScore = function(pins){
  if (this.isStrike) {
    this.score.push(pins)
  }
  this.checkOver(pins)
  this.recordStrike();
}

Game.prototype.totalScore = function(){
  var totalScore = 0
  this.score.forEach(function(pins){
    totalScore += pins
  });
  return totalScore;
}

Game.prototype.isFrame = function(){
  var length = this.score.length / 2
  return parseInt(length.toFixed());
}

Game.prototype.recordStrike = function(score){
  this.score[this.score.length - 1] === 10 ? this.isStrike = true : this.isStrike = false;
}

Game.prototype.checkOver = function(pins) {
  if ( this.score.length < 20 ) {
    this.score.push(pins);
  } else {
    this.over = true;
  }
}
