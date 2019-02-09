'use strict';

function Game () {
  this._score = 0;
};

Game.prototype.getCurrentScore = function () {
  return this._score;
};
