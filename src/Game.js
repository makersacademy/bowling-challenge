'use strict';

function Game(){
  this._rolls = [];
  this._currentRoll = 0;
}

Game.prototype.roll = function(pins) {
  this._rolls[this._currentRoll++] = pins;
}

Game.prototype.score = function() {
  var score = 0;

  for (var i = 0; i < this._rolls.length; i++) {
    if (this._isSpare(i)) {
      score += 10 + this._rolls[i + 2];
      i ++;
    } else if (this._isStrike(i)) {
      score += 10 + this._rolls[i + 1] + this._rolls[i + 2];
    }
    else {
      score += this._rolls[i];
    }
  }

  return score;
}

Game.prototype._isSpare = function(roll) {
  return (this._rolls[roll] + this._rolls[roll + 1] === 10);
};

Game.prototype._isStrike = function(roll) {
  return (this._rolls[roll] === 10);
};
