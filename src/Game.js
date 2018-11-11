"use strict";

var pins = 0

function Game() {
  this._frame = 1;
  this._roll = 1;
  this._firstRollScore = 0;
  this._secondRollScore = 0;
  this._totalScore = 0;
  this._currentKnockdown = 0;
  this._standingPins = 10;
  this._bonus = "";
  this._gameOver ="";
  this._maxRounds = 10;
 };

Game.prototype.bowl = function() {
  this.rollScoreMethod();
  this.frameAndRoll();
  };

Game.prototype.rollScoreMethod = function(){
  this._currentKnockdown = this.pinsKnockdown(pins);
  if(this._roll === 1){
    this._firstRollScore = this._currentKnockdown;
  } else {
    this._secondRollScore = this._currentKnockdown;
  }
  this.remainingPins();
};

Game.prototype.pinsKnockdown = function(pins) {
  return pins;
};

Game.prototype.remainingPins = function(){
  this._standingPins -= this._currentKnockdown;
};

Game.prototype.frameAndRoll = function(){
  this.endGameCheck();
  if(this._frame < this._maxRounds) {
    this.frameIncrement();
    this.rollAlternate();
  }
};

Game.prototype.endGameCheck = function(){
  if(this._frame === 10){
    this._firstRollScore = this.pinsKnockdown(pins);
    this._secondRollScore = 0;
    this._standingPins = 0;
    this._maxRounds = 10;
    this._gameOver = ("Game Over! Press new game to start again :)");
  }
};

Game.prototype.frameIncrement = function(){
  if(this._roll === 2 || this._standingPins === 0){
    this._frame ++;
    this.totalScoreUpdate();
  }
};

Game.prototype.totalScoreUpdate = function(){
  this._totalScore += (this._firstRollScore + this._secondRollScore);
  this.checkBonus();
  this.strikeOrSpare();
};

Game.prototype.checkBonus = function(){
  if (this._bonus === "Strike!") {
    this._totalScore += (this._firstRollScore + this._secondRollScore);
  } else if (this._bonus === "Spare!") {
    this._totalScore += this._firstRollScore;
  }
  this._bonus = "";
};

Game.prototype.strikeOrSpare = function(){
  if (this._firstRollScore === 10) {
    this._bonus = "Strike!";
  } else if (this._firstRollScore + this._secondRollScore === 10) {
    this._bonus = "Spare!";
  }
};


Game.prototype.rollAlternate = function(){
  if(this._roll === 1 && this._standingPins > 0){
    this._roll = 2;
  } else {
    this._roll = 1;
    this.frameReset();
  }
};

Game.prototype.frameReset = function(){
  this._firstRollScore = 0;
  this._secondRollScore = 0;
  this._currentKnockdown = 0;
  this._standingPins = 10;
  this._maxRounds = 10;
};

Game.prototype.newGame = function(){
  this._frame = 1;
  this._roll = 1;
  this._firstRollScore = 0;
  this._secondRollScore = 0;
  this._totalScore = 0;
  this._currentKnockdown = 0;
  this._standingPins = 10;
  this._bonus = "";
  this._maxRounds = 10;
  this._gameOver ="";
};
