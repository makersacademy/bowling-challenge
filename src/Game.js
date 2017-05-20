"use strict";

function Game() {
  this._frame = 1;
  this._roll = 1;
  this._rollScore1 = 0;
  this._rollScore2 = 0;
  this._totalScore = 0;
  this._currentKnockdown = 0;
  this._standingPins = 10;
  this._sKsP = "";
  this._gameOver ="";
  this._maxRounds = 10;
 };

Game.prototype.bowl = function() {
  this.rollScoreMethod();
  this.frameAndRoll();
  };



// Random generator and counter for rolls and frames

Game.prototype.rollScoreMethod = function(){
  this._currentKnockdown = this.pinsKnockdown();
  if(this._roll === 1){
    this._rollScore1 = this._currentKnockdown;
  } else {
    this._rollScore2 = this._currentKnockdown;
  }
  this.remainingPins();
};

Game.prototype.pinsKnockdown = function(){
  return Math.floor(Math.random() * (this._standingPins + 1));
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
    this._gameOver = ("You reached the maximum number of frames!\nGame is finished!");
  }
};

// Increments the frame, updatea the score check the bonuses

Game.prototype.frameIncrement = function(){
  if(this._roll === 2 || this._standingPins === 0){
    this._frame ++;
    this.totalScoreUpdate();
  }
};

Game.prototype.totalScoreUpdate = function(){
  this._totalScore += (this._rollScore1 + this._rollScore2);
  this.checkBonus();
  this.strikeOrSpare();
};

Game.prototype.checkBonus = function(){
  if (this._sKsP === "Strike!") {
    this._totalScore += (this._rollScore1 + this._rollScore2);
  } else if (this._sKsP === "Spare!") {
    this._totalScore += this._rollScore1;
  }
  this._sKsP = "";
};

Game.prototype.strikeOrSpare = function(){
  if (this._rollScore1 === 10) {
    this._sKsP = "Strike!";
  } else if (this._rollScore1 + this._rollScore2 === 10) {
    this._sKsP = "Spare!";
  }
};

// End of the game, reset frame, reset roll

Game.prototype.rollAlternate = function(){
  if(this._roll === 1 && this._standingPins > 0){
    this._roll = 2;
  } else {
    this._roll = 1;
    this.frameReset();
  }
};

Game.prototype.frameReset = function(){
  this._rollScore1 = 0;
  this._rollScore2 = 0;
  this._currentKnockdown = 0;
  this._standingPins = 10;
  this._maxRounds = 10;
};

Game.prototype.newGame = function(){
  this._frame = 1;
  this._roll = 1;
  this._rollScore1 = 0;
  this._rollScore2 = 0;
  this._totalScore = 0;
  this._currentKnockdown = 0;
  this._standingPins = 10;
  this._sKsP = "";
  this._maxRounds = 10;
  this._gameOver ="";
};
