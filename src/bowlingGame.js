'use strict';

function BowlingGame(){
  this.score = 0;
  this.strikeBonusThrows = 0;
  this.spareBonusThrows = 0;
  this.doubleStrikeBonusThrows = 0;
  this.striked = 0;
  this.frame = 0
  this.endFrame = 13
};

BowlingGame.prototype.roll = function(score1, score2){
  if (this.frame <= 10){
    this.regularPhase(score1, score2);
  } else {
    this.endPhase(score1, score2);
  };
};

BowlingGame.prototype.regularPhase = function(score1, score2){
  this.saveScore(score1, score2)
  this._validateThrow();
  this.updateFrame();
  this.removeStreak();
  this.checkBonuses();
  this.updateScore();
  this.isStrike();
  this.isDoubleStrike();
};

BowlingGame.prototype.endPhase = function(score1,score2) {
  this.saveScore(score1, score2);
  this._validateThrow();
  this.updateFrame();
  this.IsEndError();
  this.updateScore();
  this.finalPhaseIsStrike();
  this.isEnd();
};

BowlingGame.prototype.saveScore = function(score1, score2) {
   this.roll1 = score1
   this.roll2 = score2 || 0
};

BowlingGame.prototype.updateFrame = function(){
  this.frame += 1
};


BowlingGame.prototype.removeStreak = function(){
  if (this.roll1 != 10){
    this.striked = 0;
  };
  if (this.frame > 10){
    this.doubleStrikeBonusThrows = 0;
    this.strikeBonusThrows = 0;
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

  if (this.spareBonusThrows === 1){
    this.roll1 *= 2;
    this.spareBonusThrows -= 1;
  };
};

BowlingGame.prototype.updateScore = function(){
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

BowlingGame.prototype.isSpare = function(){
    if ((this.roll1 + this.roll2 === 10) && (this.roll2 != 0)){
      this.spareBonusThrows += 1
    };
};

BowlingGame.prototype.isDoubleStrike = function(){
  if (this.striked > 1){
    this.doubleStrikeBonusThrows += 1;
  };
};

BowlingGame.prototype.finalPhaseIsStrike = function(){
  if ((this.frame === 11) && (this.roll1 === 10)){
    this.endFrame = 12;
  } else {
    this.endFrame = 11;
  };
};

BowlingGame.prototype.isEnd = function(){
  if (this.frame === this.endFrame){
    return this.score;
  };
};

BowlingGame.prototype.IsEndError = function(){
  if (this.frame === 14){
    throw new Error("Maximum number of frames reached. Please start a new game")
  };
};

BowlingGame.prototype._validateThrow = function(){
  this._isNumber();
  this._isPositive();
  this._isSumMoreThanTen();
};

BowlingGame.prototype._isNumber = function(){
  if (isNaN(this.roll1) || isNaN(this.roll2)){
    throw new Error("Only numbers may be added to your score. Please enter a number.")
  };
};

BowlingGame.prototype._isPositive = function(){
  if (this.roll1 < 0 || this.roll2 < 0){
    throw new Error("Only positive numbers may be added to your score. Please enter a positive number.")
  };
};

BowlingGame.prototype._isSumMoreThanTen = function(){
  if ((this.roll1 + this.roll2) > 10){
    throw new Error("Only possible outcomes may be added to your score. Please enter two number which add up to less than the total number of pins.")
  };
};
