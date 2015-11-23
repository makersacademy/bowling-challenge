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
  if (roll.isSpare() === true) {this._score += 2 * roll.knockedDownPins(); roll._isSpare = false;}
  if (roll.isStrike() === true && this._rollNumber === 1) {this._score += roll.knockedDownPins() * 2;}
  if (roll.isStrike() === true && this._rollNumber === 2) {this._score += roll.knockedDownPins() * 2; roll._isStrike = false;}
  this._score += roll.knockedDownPins();
  this._rollNumber = roll.rollNumber();
  if (this._rollNumber === 1) { this._frameNumber += 1;}
};
