'use strict';

var FinalFrame = function () {
  this._pinsRemaining = 10
  this._pinsKnockedDown = [0, 0, 0]
  this.roll = new Roll()
  this._frameFinished = false
  this._frameScore = 0
}

FinalFrame.prototype.getScore = function () {
  return this._frameScore = this.calculateScore()
}

FinalFrame.prototype.firstRoll = function (pins) {
  this._pinsKnockedDown[0] = (this.roll.takeFirstTurn(pins))
  if (!this.isAStrike()) {
    this._pinsRemaining -= pins
  }
}

FinalFrame.prototype.secondRoll = function (pins) {
  this._pinsKnockedDown[1] = (this.roll.takeSecondTurn(pins, this._pinsRemaining))
  this._bonusRollActivated = true
  if (this._pinsKnockedDown[0] !== 10 && this._pinsKnockedDown[0]+ this._pinsKnockedDown[1] !== 10) {
    this._frameFinished = true
  }
}

FinalFrame.prototype.firstRollScore = function () {
  return this._pinsKnockedDown[0]
}

FinalFrame.prototype.secondRollScore = function () {
  return this._pinsKnockedDown[1]
}

FinalFrame.prototype.bonusRoll = function (pins) {
  if (this._frameFinished) {
    throw new Error ('Sorry game is over, no bonus throw')
  }
  this._pinsKnockedDown[2] = (this.roll.bonusTurn(pins, 10));
  this._frameFinished = true
}

FinalFrame.prototype.isAStrike = function () {
  return this._pinsKnockedDown[0] === 10
}

FinalFrame.prototype.isASpare = function () {
  return (this._pinsKnockedDown[0] !== 10 && this._pinsKnockedDown[0] + this._pinsKnockedDown[1] === 10)
}

FinalFrame.prototype.isFinished = function () {
  return this._frameFinished
}

FinalFrame.prototype.calculateScore = function () {
  return this._pinsKnockedDown.reduce(function (a, b) {
    return a + b;
  }, 0)
}
