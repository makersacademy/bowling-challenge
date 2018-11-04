"use strict"

function Game() {
  this._frames = [new Frame()]
  this._finished = false
}

Game.prototype.getFrames = function () {
  return this._frames
}

Game.prototype.addBowl = function (pins) {
  this.getCurrentFrame().addBowl(pins)
  this.getCurrentScore()
}

Game.prototype.getCurrentScore = function () {
  return this._frames.reduce(function (total, frame) {
    return total + frame.getScore()
  }, 0)
}

Game.prototype.getCurrentFrame = function () {
  return this._frames[this._frames.length - 1]
}

Game.prototype.startNextFrame = function () {
  this._frames.push(new Frame())
}

Game.prototype.isFinished = function() {
  if (this.getFrames().length >= 10) {
    return this._finished = true
  }
}
