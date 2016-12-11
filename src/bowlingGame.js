'use strict';

function BowlingGame(){
  this.scoreTotal = 0;
  this._rollScore = 0;
  this._frameRolls = 0;
  this.frame = 1;
  this.scoreSheet = []

};

const RESET = 0

BowlingGame.prototype.roll = function(number){
  this._RollCalculator(number);
  this._isStrike(number);
  this._nextFrame();
};

BowlingGame.prototype._RollCalculator = function(number){
  this._rollScore += number;
  this._frameRolls += 1;
};


BowlingGame.prototype._isStrike = function(number){
  if(number === 10){
    this._strike = true;
  };
};


BowlingGame.prototype._nextFrame = function(){
  if(this._frameRolls === 2 || this._strike === true){
    this.frame += 1;
    this._scoringFrame()

  };
};

BowlingGame.prototype._scoringFrame = function(){
     this.scoreSheet.push(this._rollScore)
};
