'use strict';

function Game() {
  this._score = 0;
};

Game.prototype.roll = function(pins) {
  this._score += pins;
};

Game.prototype.score = function() {

  return this._score;
};
