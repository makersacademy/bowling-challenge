'use strict'

function Bowling () {
  this.currentFrame = []
  this.score = []
  this.isSpare = false
};

Bowling.prototype.total = function () {
  return sum(this.score.flat())
}

Bowling.prototype.roll = function (pins) {
  this.currentFrame.push(pins)

  if (this.isSpare) {
    this.previousFrame().push(pins)
    this.isSpare = false
  }

  if (this.currentFrame.length === 2) {
    if (sum(this.currentFrame) === 10) {
      this.isSpare = true
    }
    this.score.push(this.currentFrame)
    this.currentFrame = []
  }
}

Bowling.prototype.frameCount = function () {
  return this.score.length
}

Bowling.prototype.previousFrame = function () {
  return this.score[this.frameCount() - 1]
}

function sum (array) {
  return array.reduce((a, b) => a + b, 0)
}
