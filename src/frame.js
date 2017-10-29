'use strict';

var Frame = function () {
  this._pinsRemaining = 10
  this._pinsKnockedDown = []
  this.roll = new Roll()
}

Frame.prototype.firstRoll = function (pins) {
  this._pinsKnockedDown.push(this.roll.takeFirstTurn(pins))
  this._pinsRemaining -= pins
  if (this.isStrike()) {
    this._pinsKnockedDown.push(0)
  }
}

Frame.prototype.secondRoll = function (pins) {
  this._pinsKnockedDown.push(this.roll.takeSecondTurn(pins, this._pinsRemaining))
}

Frame.prototype.returnScore = function () {
  return this._pinsKnockedDown.reduce(function (a, b) {
    return a + b;
  }, 0)
}

Frame.prototype.isFinished = function () {
  return (this._pinsKnockedDown.length === 2)
}

Frame.prototype.isStrike = function () {
  return this._pinsRemaining === 0
}