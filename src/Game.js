'use strict'

function Game () {
  this.frames = []
  this.frameNumber = 0
  this.score = 0
  this.isFirstRoll = true
  this.currentFrame = new Frame()
}

Game.prototype.bowl = function (pins) {
  if (this.isFirstRoll === true) {
    this.calcFirstRoll(pins)
  } else this.calcSecondRoll(pins)
}

Game.prototype.calcFirstRoll = function (pins) {
  this.currentFrame.firstRoll(pins)
  this.score = this.score + this.currentFrame.firstRollTotal
  if (this.currentFrame.isfinished) {
    this.frames.push(this.currentFrame)
    this.frameNumber += 1
  } else this.isFirstRoll = false
}

Game.prototype.calcSecondRoll = function (pins) {
  this.currentFrame.secondRoll(pins)
  this.score = this.score + this.currentFrame.secondRollTotal
  this.frames.push(this.currentFrame)
  this.frameNumber += 1
}
