"use strict";

function Frame(){
  this._pinsRemaining = 10;
  this._rollScores = [];
  this._MAXSCORE = 10;
  this._NUMBERROLLS = 2;
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

Frame.prototype.score = function(){
    return this._rollScores.reduce(function(a,b){
      return a + b
    }, 0);
};

Frame.prototype.containsAStrike = function(){
  if(this._rollScores.includes(this._MAXSCORE)){
    return true;
  }
  else {
    return false;
  }
};

Frame.prototype.containsASpare = function(){
  if(this._pinsRemaining === 0 && this._rollScores.length === this._NUMBERROLLS){
    return true;
  }
  else {
    return false;
  }
};
