'use strict';

function BowlingGame(){
  this._rolls = [];
}

BowlingGame.prototype.roll = function(pins) {
  this._rolls.push(pins)
};

BowlingGame.prototype.score = function() {
  var score = 0;

  for(var roll = 0; roll < this._rolls.length; roll++) {
    if(this._isSpare(roll)) {
      score += this._rolls[roll] + this._rolls[roll + 1];
    } else {
      score += this._rolls[roll];
    }
  }
  return score;
};

BowlingGame.prototype._isSpare = function(roll) {
  return this._rolls[roll - 1] + this._rolls[roll] === 10;
};