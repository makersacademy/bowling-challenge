'use strict'

function Bowling () {
  this.currentFrame = new Frame()
  this.frames = []
};

Bowling.prototype.total = function () {
  return this._calculateTotal()
}

Bowling.prototype.roll = function (pins) {
  if (pins > 10) throw new Error('Invalid number of pins')

  this._addBonus(pins)
  if (this.frameCount() > 10) {
    throw new Error('Game is complete, cannot roll')
  } else if (this.frameCount() === 10) {
    this.currentFrame.tenthFrame(pins)
  } else {
    this.currentFrame.roll(pins)
  }

  if (this.currentFrame.isComplete) {
    this.frames.push(this.currentFrame)
    this.currentFrame = new Frame()
  }
}

Bowling.prototype.frameCount = function () {
  return this.frames.length + 1
}

Bowling.prototype.cumulativeTotals = function () {
  var cTotals = []
  this._frameTotals().reduce ( function(a, b, i) {
    return cTotals[i] = a+b}, 0
  )
  return cTotals
}

Bowling.prototype._frameTotals = function () {
  var finishedFrames = this.frames.filter(frame => !frame.hasBonus())
  return finishedFrames.map(frame => frame.calculateTotal())
}

Bowling.prototype._addBonus = function (pins) {
  var bonusToAdd = this.frames.filter(frame => frame.hasBonus())
  bonusToAdd.forEach(function (frame) {
    frame.addBonus(pins)
  })
}

Bowling.prototype._calculateTotal = function () {
  return sum(this.frames.map(frame => frame.calculateTotal()))
}

function sum (array) {
  return array.reduce((a, b) => a + b, 0)
}
