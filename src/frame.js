'use strict'

function Frame () {
  this.score = []
  this.bonus = { rolls: 0, points: 0 }
}

Frame.prototype.roll = function (pins) {
  this.score.push(pins)
}

Frame.prototype.addBonus = function (pins) {
  this.bonus.points += pins
}

Frame.prototype.spare = function () {
  this.score = [10, 0]
  this._addRolls(1)
}

Frame.prototype.strike = function () {
  this.score = [10, 0]
  this._addRolls(2)
}

Frame.prototype._addRolls = function (bonusRolls) {
  this.bonus.rolls = bonusRolls
}
