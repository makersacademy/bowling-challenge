'use strict'

function Game () {
  this.frames = []
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
  this.isFirstRoll = false
}

Game.prototype.calcSecondRoll = function (pins) {
  this.currentFrame.secondRoll(pins)
  this.score = this.score + this.currentFrame.secondRollTotal
}
