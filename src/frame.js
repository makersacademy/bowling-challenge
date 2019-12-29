'use strict'

function Frame () {
  this.score = []
  this.bonus = { rolls: 0, points: 0 }
  this.isComplete = false
}

Frame.prototype.roll = function (pins) {
  if (pins === 10) {
    this._strike()
  } else {
    this.score.push(pins)

    if (this.score.length === 2) this.isComplete = true

    if (sum(this.score) === 10) this._spare()
  }
}

Frame.prototype.addBonus = function (pins) {
  this.bonus.points += pins
  this.bonus.rolls--
}

Frame.prototype.tenthFrame = function (pins) {
  this.score.push(pins)

  if (
    (this.score.length === 3) ||
    (this.score.length === 2 && sum(this.score) < 10)) {
    this.isComplete = true
  }
}

Frame.prototype.hasBonus = function () {
  return this.bonus.rolls > 0
}

Frame.prototype.bonusPoints = function () {
  return this.bonus.points
}

Frame.prototype.calculatePoints = function () {
  return sum(this.score)
}

Frame.prototype._spare = function () {
  this._addRolls(1)
}

Frame.prototype._strike = function () {
  this.score = [10, 0]
  this.isComplete = true
  this._addRolls(2)
}

Frame.prototype._addRolls = function (bonusRolls) {
  this.bonus.rolls = bonusRolls
}

function sum (array) {
  return array.reduce((a, b) => a + b, 0)
}
