"use strict"

function FinalFrame(){
  this._pinsRemaining = 10;
  this._rollScores = [];
  this._numberRolls = 2;
  this._MAXSCORE = 10;
  this._MAXROLLS = 3;
};


FinalFrame.prototype.roll = function(pinsKnocked, rollClass = new Roll()){
  if(this.isInPlay()){
    var roll = rollClass;
    if(roll.validRoll(pinsKnocked, this._pinsRemaining)){
      this._rollScores.push(pinsKnocked);
      this._pinsRemaining = this._pinsRemaining - pinsKnocked;
      this.isExtraRoll();
    };
  }
};

FinalFrame.prototype.isExtraRoll = function(){
  if(this._rollScores[0] === this._MAXSCORE || this._rollScores[0] + this._rollScores[1] === this._MAXSCORE){
    this._pinsRemaining = this._MAXSCORE;
    this._numberRolls = this._MAXROLLS;
    return true;
  }
};

FinalFrame.prototype.totalScore = function(){
  return this._rollScores.reduce(function(a,b){
    return a + b
  }, 0);
};

FinalFrame.prototype.isInPlay = function(){
  if(this._rollScores.length === this._numberRolls){
    return false;
  } else {
    return true;
  }
};