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
    score += this._rolls[i];
  }

  return score;
}
