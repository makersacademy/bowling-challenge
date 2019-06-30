"use strict"

function FinalFrame(){
  this._pinsRemaining = 10;
  this._rollScores = [];
};


FinalFrame.prototype.roll = function(pinsKnocked, rollClass = new Roll()){
  this.isExtraRoll();
  var roll = rollClass;
  if(roll.validRoll(pinsKnocked, this._pinsRemaining)){
    this._rollScores.push(pinsKnocked);
    this._pinsRemaining = this._pinsRemaining - pinsKnocked;
  };
};

FinalFrame.prototype.isExtraRoll = function(){
  if(this._rollScores[0] === 10 || this._rollScores[0] + this._rollScores[1]=== 10){
    this._pinsRemaining = 10;
    return true;
  }
};

FinalFrame.prototype.totalScore = function(){
  return this._rollScores.reduce(function(a,b){
    return a + b
  }, 0);
};