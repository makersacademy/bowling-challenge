'use strict';

var Frame = function () {
  this._pinsRemaining = 10
  this._pinsKnockedDown = [0, 0]
  this.roll = new Roll()
  this._frameFinished = false
}

Frame.prototype.firstRoll = function (pins) {
  this._pinsKnockedDown[0] = (this.roll.takeFirstTurn(pins))
  this._pinsRemaining -= pins
  if (this.isAStrike()) {
    this._pinsKnockedDown[1] = 0
    this._frameFinished = true
  }
}

Frame.prototype.secondRoll = function (pins) {
  this._pinsKnockedDown[1] = (this.roll.takeSecondTurn(pins, this._pinsRemaining))
  this._frameFinished = true
}

Frame.prototype.returnScore = function () {
  return this._pinsKnockedDown.reduce(function (a, b) {
    return a + b;
  }, 0)
}

Frame.prototype.isFinished = function () {
  return this._frameFinished
}

Frame.prototype.isAStrike = function () {
  return this._pinsKnockedDown[0] === 10
}