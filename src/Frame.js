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

Frame.prototype.isComplete = function(index){
  // No rolls
  if(this._rolls.length == 0) return false;

  var complete = true;

  // 10th frame has special rules
  if(index == 9 && this._rolls.length < 3) {
    if(this._rolls[0].getScore() == 10) complete = false;
    if(this._rolls.length == 2) {
      let score = this._rolls[0].getScore() + this._rolls[1].getScore();
      if(score == 10) complete = false;
    }
  } else if(this._rolls.length == 1 && this._rolls[0].getScore() != 10) {
      complete = false;
  }

  return complete;
};

Frame.prototype.isStrike = function(){
  return this._rolls.length == 1 && this._rolls[0].getScore() == 10;
}

Frame.prototype.isSpare = function(){
  return this._rolls.length == 2 && ( this._rolls[0].getScore() + this._rolls[1].getScore() ) == 10;
}
