'use strict';

function Game(){
  this._rollNumber = 1;
  this._frameNumber = 1;
  this._score=0;
}


Game.prototype.frameNumber = function(){
  return this._frameNumber;
};

Game.prototype.rollNumber = function(){
  return this._rollNumber;
};

Game.prototype.score = function(){
  return this._score;
};

Game.prototype.increaseScore = function(roll){
  this._score += roll.knockedDownPins();
  this._rollNumber = roll.rollNumber();
  if (this._rollNumber === 1) { this._frameNumber += 1;}
};
