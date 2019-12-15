'use strict'

function Bowling () {
  this.currentFrame = []
  this.score = []
  this.bonus = []
  for (var i = 0; i < 9; i++) {
    this.bonus.push({rolls: 0, points: 0})
  }
};

Bowling.prototype.total = function () {
  var bonusPoints = this.bonus.map(frameBonus => frameBonus.points)
  return sum(this.score.flat().concat(bonusPoints))
}

Bowling.prototype.roll = function (pins) {
  if (this.frameCount() === 10) {
    if (this.isFinished()) throw new Error('Game is complete, cannot roll')
  } else {
    this.addBonus(pins)

    if (pins === 10) {
      this.currentBonus().rolls = 2
      this.score.push([10, 0])
    } else {
      this.currentFrame.push(pins)

      if (this.currentFrame.length === 2) {
        if (sum(this.currentFrame) === 10) {
          this.currentBonus().rolls = 1
        }

        this.score.push(this.currentFrame)
        this.currentFrame = []
      }
    }
  }
}

Bowling.prototype.frameCount = function () {
  return this.score.length
}

Bowling.prototype.previousFrame = function () {
  return this.score[this.frameCount() - 1]
}

Bowling.prototype.isFinished = function () {
  return this.previousFrame().length === 2
}

Bowling.prototype.currentBonus = function () {
  return this.bonus[this.frameCount()]
}

Bowling.prototype.addBonus = function (pins) {
  var bonusToAdd = this.bonus.filter(frameBonus => frameBonus.rolls > 0)
  bonusToAdd.forEach(function (frame) { 
    frame.points += pins
    frame.rolls --
  })
}

function sum (array) {
  return array.reduce((a, b) => a + b, 0)
}
