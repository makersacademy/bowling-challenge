'use strict';

function BowlingGame(){
  this.score = 0;
  this.strikeBonusThrows = 0;
  this.spareBonusThrows = 0;
};

BowlingGame.prototype.roll = function(score1, score2){
  this.score += score1;
  this.score += score2;
};
