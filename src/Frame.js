'use strict';

function Frame(){
  this._rolls = [];
};

Frame.prototype.addRoll = function(roll){
  this._rolls.push(roll);
};

Frame.prototype.getRolls = function(){
  return this._rolls;
};

Frame.prototype.isComplete = function(){
  // No rolls
  if(this._rolls.length == 0) return false;

  // One roll but not a strike
  if(this._rolls.length == 1 && this._rolls[0].getScore() != 10) return false;

  return true;
};

Frame.prototype.isStrike = function(){
  return this._rolls.length == 1 && this._rolls[0].getScore() == 10;
}

Frame.prototype.isSpare = function(){
  return this._rolls.length == 2 && ( this._rolls[0].getScore() + this._rolls[1].getScore() ) == 10;
}
