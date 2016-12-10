'use strict';

function BowlingGame(){
  this.score = 0;
  this.rollScore = 0;
};

BowlingGame.prototype.roll = function(number){
  this.rollScore += number;
  return this.rollScore
};
