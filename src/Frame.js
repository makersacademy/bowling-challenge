"use strict";

function Frame(){
  this._pinsRemaining = 10;
  this._rollScores = [];
};

Frame.prototype.roll = function(pinsKnocked, rollClass = new Roll()){
  var roll = rollClass;
  if(roll.validRoll(pinsKnocked, this._pinsRemaining)){
    this._rollScores.push(pinsKnocked);
    this._pinsRemaining = this._pinsRemaining - pinsKnocked;
  };
};

Frame.prototype.numberPinsRemaining = function(){
  return this._pinsRemaining;
};

Frame.prototype.totalScore = function(){
    return this._rollScores.reduce(function(a,b){
      return a + b
    }, 0);
};

Frame.prototype.isAStrike = function(){
  if(this._rollScores[0] === 10){
    return true;
  }
  else {
    return false;
  }
};
