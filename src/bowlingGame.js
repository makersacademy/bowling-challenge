'use strict';

function BowlingGame(){
  this.score = 0;
  this.strikeBonusThrows = 0;
  this.spareBonusThrows = 0;
};

BowlingGame.prototype.roll = function(score1, score2){
  this.saveScore(score1, score2)
  this.checkBonuses();
  this.updateScore();
  this.isStrike();
};

BowlingGame.prototype.saveScore = function(score1, score2) {
   this.roll1 = score1
   this.roll2 = score2
};

BowlingGame.prototype.checkBonuses = function(){
  if (this.strikeBonusThrows > 0) {
    this.roll1 *= 2;
    this.roll2 *= 2;
    this.strikeBonusThrows -= 2;
  };
};

BowlingGame.prototype.updateScore = function(){
  this.roll2 = this.roll2 || 0;
  this.score += this.roll1;
  this.score += this.roll2;
};

BowlingGame.prototype.isStrike = function(){
  if (this.roll1 === 10){
    this.strikeBonusThrows += 2
  };
};
