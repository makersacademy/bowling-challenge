'use strict';

function BowlingGame(){
  this.score = 0;
  this.strikeBonusThrows = 0;
  this.spareBonusThrows = 0;
};

BowlingGame.prototype.roll = function(score1, score2){
  this.updateScore(score1, score2);
};

BowlingGame.prototype.updateScore = function(score1, score2){
  score2 = score2 || 0
  this.score += score1;
  this.score += score2;
};
