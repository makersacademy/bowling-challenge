'use-strict';
// Game is responsible for recording the scores across 10 frames

var Game = function() {
  this.score = [];
}

Game.prototype.recordScore = function(pins){
  this.score.push(pins);
}

Game.prototype.totalScore = function(){
  var totalScore = 0
  this.score.forEach(function(pins){
    totalScore += pins
  });
  return totalScore;
}
