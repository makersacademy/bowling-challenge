'use strict';

function BowlingGame(){
  this.score = 0;
  this.strikeBonusThrows = 0;
  this.spareBonusThrows = 0;
  this.doubleStrikeBonusThrows = 0;
  this.striked = 0;
};

BowlingGame.prototype.roll = function(score1, score2){
  this.saveScore(score1, score2)
  this.removeStreak();
  this.checkBonuses();
  this.updateScore();
  this.isStrike();
  this.isDoubleStrike();
  console.log(this.doubleStrikeBonusThrows)
};

BowlingGame.prototype.saveScore = function(score1, score2) {
   this.roll1 = score1
   this.roll2 = score2
};

BowlingGame.prototype.removeStreak = function(){
  if (this.roll1 != 10){
    this.striked = 0
  };
};


BowlingGame.prototype.checkBonuses = function(){
  if ((this.doubleStrikeBonusThrows === 1) && (this.striked === 0)){
    this.roll1 *= 3;
    this.roll2 *= 2;
    this.doubleStrikeBonusThrows -= 1;
    this.strikeBonusThrows -= 2;
  };

  if ((this.doubleStrikeBonusThrows === 1) && (this.striked > 0)){
    this.roll1 *= 3;
    this.doubleStrikeBonusThrows -= 1;
    this.strikeBonusThrows -= 2;
  };

  if ((this.strikeBonusThrows > 0) && (this.doubleStrikeBonusThrows === 0) && (this.striked === 0)) {
    this.roll1 *= 2;
    this.roll2 *= 2;
    this.strikeBonusThrows -= 2;
  };
  if ((this.strikeBonusThrows > 0) && (this.doubleStrikeBonusThrows === 0) && (this.striked > 0)) {
    this.roll1 *= 2;
    this.strikeBonusThrows -= 2;
  };
};

BowlingGame.prototype.updateScore = function(){
  this.roll2 = this.roll2 || 0;
  this.score += this.roll1;
  this.score += this.roll2;
};


BowlingGame.prototype.isStrike = function(){
  if ((this.roll1 === 20 || 30) && (this.doubleStrikeBonusThrows === 0)){
    this.strikeBonusThrows += 2;
    this.striked += 1;
  };

  if ((this.roll1 === 30 || 20) && (this.doubleStrikeBonusThrows === 1)){
    this.strikeBonusThrows += 1;
    this.striked += 1;
  };
};

BowlingGame.prototype.isDoubleStrike = function(){
  if (this.striked > 1){
    this.doubleStrikeBonusThrows += 1;
  };
};
