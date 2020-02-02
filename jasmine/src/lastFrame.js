'use strict'

function LastFrame () {
  this._shots = []
  this.MAX_PINS = 10
  this._complete = false
  this._bonusShot = false
}

LastFrame.prototype.addShot = function (pins) {
  if (this.isCompleted()) throw new Error('This frame is already complete!')
  if (!Number.isInteger(pins)) throw new TypeError('You need to insert the number of pins as an Integer')
  if (pins > this.MAX_PINS || (!this.isStrike() && this._shots.length === 1 && this.getShot(1) + pins > this.MAX_PINS)) throw new Error("You can't hit more than 10 pins!")

  this._shots.push(pins)
  if (this._shots.length >= 2) this._complete = true
  this.bonusShot()
}

LastFrame.prototype.getShot = function (number) {
  return this._shots[number - 1]
}

LastFrame.prototype.isCompleted = function () {
  return this._complete
}

LastFrame.prototype.bonusShot = function () {
  if (this.getShot(1) + this.getShot(2) >= 10 && this._shots.length < 3) {
    this._bonusShot = true
    this._complete = false
  }
}

LastFrame.prototype.total = function () {
  return this._shots.reduce((acc, val) => acc + val)
}

LastFrame.prototype.isStrike = function () {
  return this.getShot(1) === this.MAX_PINS
}
