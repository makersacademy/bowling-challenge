'use-strict';
// Game is responsible for recording the scores across 10 frames

var Game = function() {
  this.score = [];
  this.over = false;
}

Game.prototype.recordScore = function(pins){
  if ( this.score.length < 20 ) {
    this.score.push(pins);
  } else {
    this.over = true;
  }
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
