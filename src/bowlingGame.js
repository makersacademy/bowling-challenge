'use strict';

function BowlingGame(){
  this.score = 0;
  this._rollScore = 0;
  this._numberOfRolls = 0;
  this._frame = 1;
  this.strike = false;
};

const RESET = 0

BowlingGame.prototype.roll = function(number){
  this._RollCalculator(number);
  this._nextFrame();
  this._isStrike(number);
};

BowlingGame.prototype._isStrike = function(number){
  if(number === 10){
    this._frame += 1;
  };
};

BowlingGame.prototype._RollCalculator = function(number){
  this._rollScore += number;
  this._numberOfRolls += 1;
};

BowlingGame.prototype._nextFrame = function(){
  if(this._numberOfRolls === 2){
    this._frame += 1;
    this._numberOfRolls = RESET;
    this._rollScore = RESET;
  };
};
