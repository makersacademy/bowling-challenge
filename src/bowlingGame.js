'use strict';

function BowlingGame(){
  this.score = 0;
  this._rollScore = 0;
  this._frameRolls = 0;
  this._frame = 1;
  this._overallRolls = 0;
  this._strike = false;
  this._strikeBonus = false;
  this._doubleStrikeBonus = false;
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
  this._overallRolls += 1;
};


BowlingGame.prototype._isStrike = function(number){
  if(number === 10){
    this._strike = true;
  };
};


BowlingGame.prototype._nextFrame = function(){
  if(this._frameRolls === 2 || this._strike === true){
    this._frame += 1;
    this._scoreCalculator();
    this._reset();
  };
};

BowlingGame.prototype._scoreCalculator = function(){
  if(this._doubleStrikeBonus === true) {
   this.score += this._rollScore * 3;
 } else if (this._strikeBonus === true) {
   this.score += this._rollScore * 2;
 } else {
   this.score += this._rollScore
 };
};

BowlingGame.prototype._reset = function(){
  this._frameRolls = RESET;
  this._rollScore = RESET;
  this._strikeBonus = false;
  this._doubleStrikeBonus = false;
  this._activateBonus();
  this._activateDoubleStrikeBonus();
  this._strike = false;
};

BowlingGame.prototype._activateDoubleStrikeBonus = function(){
  if (this._strike === true && this._strikeBonus === true) {
    this.doubleStrikeBonus = true
  };
};

BowlingGame.prototype._activateBonus = function(){
  if(this._strike === true) {
    this._strikeBonus = true;
  };
};
