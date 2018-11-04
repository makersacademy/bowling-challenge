"use strict"

function Game() {
  this._frames = []
  this._currentFrame = 1
  this._finished = false
}

Game.prototype.getFrames = function () {
  return this._frames
}

Game.prototype.getCurrentScore = function () {
  return this._frames.reduce(function (total, frame) {
    return total + bowl
  }, 0)
}

Game.prototype.getCurrentFrame = function () {
  return this._currentFrame
}

Game.prototype.startNextFrame = function () {
  this._currentFrame++
}

Game.prototype.isFinished = function() {
  if (this.getFrames().length >= 10) {
    return this._finished = true
  }
}
