'use strict'

function Game () {
  this.frames = []
  this.framesCompleted = 0
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
  if (this.currentFrame.isFinished === true) {
    this.frames.push(this.currentFrame)
    this.framesCompleted += 1
    this.finalScore
  } else this.isFirstRoll = false
}

Game.prototype.calcSecondRoll = function (pins) {
  this.currentFrame.secondRoll(pins)
  this.score = this.score + this.currentFrame.secondRollTotal
  this.frames.push(this.currentFrame)
  this.framesCompleted += 1
  this.finalScore
  this.isFirstRoll = true
  this.currentFrame = new Frame()
}

Game.prototype.finalScore = function () {
  if (this.score === 0 && this.framesCompleted === 10) {
    return 'gutter game'
  }
}
