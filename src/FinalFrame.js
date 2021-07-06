'use strict'

function FinalFrame () {
  Frame.call(this)
  this.STRIKE = 10
}

FinalFrame.prototype = Object.create(Frame.prototype)
FinalFrame.prototype.constructor = FinalFrame

FinalFrame.prototype.getScore = function () {
  return this._bowlPair.reduce(function (total, bowl) {
    return total + bowl
  }, 0)
}

FinalFrame.prototype.bowl = function (pins) {
  if (this._firstBowl() + pins > this.STRIKE && this._bowlPair.length < 2 &&
    !this.isStrike()) {
    throw `You can't knock over more than ${this.STRIKE} pins!`
  }
  this._bowlPair.push(pins)
}

FinalFrame.prototype.isStrike = function () {
  return this._bowlPair.includes(this.STRIKE)
}

FinalFrame.prototype.isSpare = function () {
  return this._firstBowl() + this._bowlPair[1] === this.STRIKE &&
    !this.isStrike()
}

FinalFrame.prototype.isFinished = function () {
  if (this.isStrike() || this.isSpare()) { return this.numberOfBowls() > 2 }
  return this.numberOfBowls() > 1
}
