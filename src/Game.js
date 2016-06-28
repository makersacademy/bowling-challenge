'use strict';

function Game() {
  this._rolls = [];
  this._current = 0;
};

Game.prototype.roll = function(pins) {
  if (typeof pins !== 'number') {
    throw new Error('expected a number');
  }
  this ._rolls[this._current++] = pins;
};

Game.prototype.score = function() {
  var score = 0;

  for (var i = 0; i < this._rolls.length; i++) {
    score += this._rolls[i];
  }

  return score;
};
