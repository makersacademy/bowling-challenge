'use strict'

function Bowling () {
  this.currentFrame = new Frame()
  this.frames = []
};

Bowling.prototype.total = function () {
  return this._calculateScore() + this._calculateBonus()
}

Bowling.prototype.roll = function (pins) {
  this._addBonus(pins)
  
  if (this._frameCount() > 10) {
    throw new Error('Game is complete, cannot roll')
  } else if (this._frameCount() === 10) {
    this.currentFrame.tenthFrame(pins)
  } else {
    this.currentFrame.roll(pins)
  }

  if (this.currentFrame.isComplete) {
    this.frames.push(this.currentFrame)
    this.currentFrame = new Frame()
  }
}

Bowling.prototype._frameCount = function () {
  return this.frames.length + 1
}

Bowling.prototype._addBonus = function (pins) {
  var bonusToAdd = this.frames.filter(frame => frame.hasBonus())
  bonusToAdd.forEach(function (frame) {
    frame.addBonus(pins)
  })
}

Bowling.prototype._calculateScore = function () {
  return sum(this.frames.map(frame => frame.calculatePoints()))
}

Bowling.prototype._calculateBonus = function () {
  return sum(this.frames.map(frame => frame.bonusPoints()))
}

function sum (array) {
  return array.reduce((a, b) => a + b, 0)
}
