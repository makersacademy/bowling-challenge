'use strict'

function Game () {
  this._frames = []
  this._points = 0
}

Game.prototype.addFrame = function () {
  if (this.frameNumber() > 0) {
    if (!this.currentFrame().isCompleted()) throw new Error('This frame is not complete yet!')
  }
  if (this.frameNumber() === 10) throw new Error("This game is over, can't play for ever!")

  this._frames.push(new Frame())
}

Game.prototype.frameNumber = function () {
  return this._frames.length
}

Game.prototype.getPoints = function () {
  return this._points
}

Game.prototype.currentFrame = function () {
  return this._frames[this._frames.length - 1]
}

Game.prototype.previousFrame = function () {
  return this._frames[this._frames.length - 2]
}

Game.prototype.addPoints = function () {
  if (this.frameNumber() > 1) {
    if (this.previousFrame().isSpare()) this._points += this.currentFrame().getShot(1)
  }
  this._points += this.currentFrame().total()
}