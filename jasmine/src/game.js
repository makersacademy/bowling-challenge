'use strict'

function Game () {
  this._frames = []
}

Game.prototype.addFrame = function () {
  this._frames.push(new Frame())
}

Game.prototype.frameNumber = function () {
  return this._frames.length
}