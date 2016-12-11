'use strict';

function BowlingGame(){
  this.score = 0;
  this._rollScore = 0;
  this._numberOfRolls = 0;
  this._frame = 1;
  this._strike = false;
  this._strikeBonus = false;
};

const RESET = 0

BowlingGame.prototype.roll = function(number){
  this._RollCalculator(number);
  this._isStrike(number);
  this._nextFrame();
};

BowlingGame.prototype._isStrike = function(number){
  if(number === 10){
    this._strike = true;
  };
};

BowlingGame.prototype._RollCalculator = function(number){
  this._rollScore += number;
  this._numberOfRolls += 1;
};

BowlingGame.prototype._nextFrame = function(){
  if(this._numberOfRolls === 2 || this._strike === true){
    this._frame += 1;
    this._scoreCalculator();
    this._reset();
  };
};

BowlingGame.prototype._reset = function(){
  this._numberOfRolls = RESET;
  this._rollScore = RESET;
  this._strikeBonus = false;
  this._activateBonus();
  this._strike = false;
};

BowlingGame.prototype._activateBonus = function(){
  if(this._strike === true) {
    this._strikeBonus = true;
  };
};

BowlingGame.prototype._scoreCalculator = function(){
  this._bonusPoints();
};

BowlingGame.prototype._bonusPoints = function(){
   if(this._strikeBonus === true) {
    this.score += this._rollScore * 2;
  } else {
    this.score += this._rollScore;
  };
};
