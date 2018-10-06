'use strict'

function Game () {
  this.score = 0
  this.frames = []
  this.newFrameNeeded = true
}

Game.prototype.roll = function () {
  this.makeNewFrame()
}

Game.prototype.makeNewFrame = function () {
  if (this.newFrameNeeded === true) {
    this.frames.push('Frame')
    this.newFrameNeeded = false
  }
}

module.exports = Game
