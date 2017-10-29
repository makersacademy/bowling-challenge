'use strict';

var Frame = function () {
  this._pinsRemaining = 10
  this._rollTurn = 1
  this._pinsKnockedDown = []
  this.roll = new Roll()
}

Frame.prototype.firstRoll = function (pins) {
  this._pinsKnockedDown.push(this.roll.takeFirstTurn(pins))
}

Frame.prototype.secondRoll = function (pins) {
  this._pinsKnockedDown.push(this.roll.takeSecondTurn(pins, this._pinsKnockedDown[0]))
}

Frame.prototype.returnScore = function () {
  return this._pinsKnockedDown.reduce(function(a, b) { return a + b; }, 0)
}