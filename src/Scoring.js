'use strict' ;

function Scoring(){
  this.currentScore = 0;
  this.spare = false;
};

Scoring.prototype.getCurrentScore = function(){
  return this.currentScore;
};

Scoring.prototype.calculateScore = function(firstRoll, secondRoll){
  this.currentScore += firstRoll + secondRoll;
  this.strikeBonus(firstRoll, secondRoll);
};

Scoring.prototype.isStrike = function(hits){
     this.currentScore += 10;
     return true;
};

Scoring.prototype.isSpare = function(frameTotal){

  return this.spare = true;
};

Scoring.prototype.strikeBonus = function(firstRoll, secondRoll){

};

Scoring.prototype.spareBonus = function(firstRoll){

};
