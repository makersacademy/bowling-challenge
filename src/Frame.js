'use strict';

function Frame (rolls){
  this.rolls = rolls;
};

Frame.prototype._firstRoll = function () {
  return this.rolls[0];
};

Frame.prototype.total = function () {
  return this._frameScore()
};

Frame.prototype._frameScore = function () {
  return this.rolls.reduce(function(a,b) {
    return a + b
  });
};

Frame.prototype._isSpare = function () {
  if (this._isStrike() === false) {
    if(this._frameScore() === 10) {
      return true;
    }
  } else {
    return false;
  }
};

Frame.prototype._isStrike = function () {
  if(this.rolls[0]===10 && this.rolls.length === 1) {
    return true;
  }
  else {
    return false;
  }
};
