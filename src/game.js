'use strict'

function Game() {
  this._frames = [new Frame()]
  this._finished = false
}

Game.prototype.getFrames = function () {
  return this._frames
}

Game.prototype.getCurrentFrame = function () {
  return this._frames[this._frames.length - 1]
}

Game.prototype.startNextFrame = function () {
  this._frames.push(new Frame())
}

Game.prototype.getCurrentScore = function () {
  return this._frames.reduce(function (total, frame, index, frames) {
    return total + frame.getScore(frames[index + 1], frames[index + 2])
  }, 0)
}

Game.prototype.addBowl = function (pins) {
  if (this.isFinished()) {
    throw 'Game Over!'
  }
  this.getCurrentFrame().addBowl(pins)
  this.getCurrentScore()
  if (!this.isFinished() && this.getCurrentFrame().isFinished()) {
    this.startNextFrame()
  }
}

Game.prototype.isFinished = function() {
  if (this._frames.length >= 10 && this.getCurrentFrame().isFinished()) {
    this._finished = true
    return this._finished
  }
}
