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

Game.prototype.startNextFrame = function () {
  this._currentFrame++
}

Game.prototype.addFrame = function(frame) {
  this._currentScore += frame.getScore()
  this.startNextFrame()
}
