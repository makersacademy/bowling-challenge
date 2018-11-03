"use strict";

function Game() {
  this._currentScore = 0
}

Game.prototype.getCurrentScore = function () {
  return this._currentScore
}
