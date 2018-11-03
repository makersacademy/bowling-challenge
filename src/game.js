"use strict";

function Game() {
  this._currentScore = 0
  this._currentFrame = 1
}

Game.prototype.getCurrentScore = function () {
  return this._currentScore
}

Game.prototype.getCurrentFrame = function () {
  return this._currentFrame
}
