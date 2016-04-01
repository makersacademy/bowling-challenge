"use strict";

function Game() {
  this._currentScore = 0;
}

Game.prototype.roll = function (pins) {
  this._rollScore = pins;
  this.updateScore();
};

Game.prototype.updateScore = function () {
  this._currentScore += this._rollScore;
}

Game.prototype.getScore = function () {
  return this._currentScore;
};
