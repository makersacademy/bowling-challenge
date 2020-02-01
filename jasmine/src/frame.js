'use strict'

function Frame () {
  this._shots = []
  this.MAX_PINS = 10
  this._complete = false
}

Frame.prototype.addShot = function (pins) {
  if (this.isCompleted()) throw new Error('This frame is already complete!')
  if (!Number.isInteger(pins)) throw new TypeError('You need to insert the number of pins as an Integer')
  if (pins > this.MAX_PINS || this.getShot(1) + pins > this.MAX_PINS) throw new Error("You can't hit more than 10 pins!")

  this._shots.push(pins)
  if (this.isStrike() || this._shots.length === 2) this._complete = true
}

Frame.prototype.getShot = function (number) {
  return this._shots[number - 1]
}

Frame.prototype.isSpare = function () {
  return this.total() === this.MAX_PINS && this.getShot(1) !== this.MAX_PINS
}

Frame.prototype.isStrike = function () {
  return this.getShot(1) === this.MAX_PINS
}

Frame.prototype.isCompleted = function () {
  return this._complete
}

Frame.prototype.total = function () {
  return this._shots.reduce((acc, val) => acc + val)
}
