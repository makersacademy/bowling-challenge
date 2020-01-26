'use strict'

function Game () {
  this._frames = []
}

Game.prototype.addFrame = function () {
  if (this.frameNumber() === 10) throw new Error("This game is over, can't play for ever!")

  this._frames.push(new Frame())
}

Game.prototype.frameNumber = function () {
  return this._frames.length
}