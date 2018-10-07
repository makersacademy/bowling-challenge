'use strict'

var Frame = require('./frame')

function Game (frameClass = Frame) {
  this.frameClass = frameClass
  this.score = 0
  this.frames = []
  this.rolls = 0
}

Game.prototype.roll = function (roleScore) {
  this._makeNewFrame()
  this.rolls += 1
  for (let eachFrame of this.frames) {
    eachFrame.addScore(roleScore)
  }
}

Game.prototype._makeNewFrame = function () {
  if (this.rolls % 2 === 0) {
    this.frames.push(new this.frameClass())
  }
}

module.exports = Game
