'use strict';

function BowlingGame(){
  this.scoreTotal = 0;
  this._rollOne = 0;
  this._rollTwo = 0;
  this._frameRolls = 0;
  this.frame = 1;
  this.scoreSheet = []
  this.bonus = null

};

const RESET = 0

BowlingGame.prototype.rolls = function(number1,number2){
  number2 = number2 || 0
  this._RollCalculator(number1,number2);
  this._isStrike(number1);
  this._nextFrame();
};

BowlingGame.prototype._RollCalculator = function(number1,number2){
  this._rollOne = number1;
  this._rollTwo = number2;
  this._frameRolls += 1;
};


BowlingGame.prototype._isStrike = function(number1){
  if(number1 === 10){
    this._strike = true;

  };
};


BowlingGame.prototype._nextFrame = function(){
  if(this._frameRolls === 2 || this._strike === true){
    this.frame += 1;
    this._scoringFrame()
    this.bonus = 'strike'

  };
};

BowlingGame.prototype._scoringFrame = function(){
     var rollScore = this._rollOne + this._rollTwo
     if (this.bonus === 'strike'){
       rollScore *= 2;
       this.bonus = null;
     }

     this.scoreSheet.push(rollScore)
};
