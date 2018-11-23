'use strict'

function Frame () {
  this._bowls = []
  this.MAX_SCORE = 10
}

Frame.prototype.getBowls = function () {
  return this._bowls
}

Frame.prototype._firstBowl = function () {
  return this._bowls[0]
}

Frame.prototype.numberOfBowls = function () {
  return this._bowls.length
}

Frame.prototype._sumOfBowls = function () {
  if (this.numberOfBowls() < 1) { return 0 }
  if (this.numberOfBowls() < 2) { return this._firstBowl() }
  return this._firstBowl() + this._bowls[1]
}

Frame.prototype.addBowl = function (pins) {
  if (this._sumOfBowls() + pins > this.MAX_SCORE) {
    throw 'Invalid entry - there are only 10 pins!'
  }
  this._bowls.push(pins)
}

Frame.prototype.getScore = function (secondFrame, thirdFrame) {
  if (this.numberOfBowls() > 0) {
    return this._sumOfBowls() + this._calculateBonus(secondFrame, thirdFrame)
  }
  return 0
}

Frame.prototype._calculateBonus = function (secondFrame, thirdFrame) {
  if (!secondFrame) { return 0 }
  if (this.isStrike()) { return this._strikeBonus(secondFrame, thirdFrame) }
  if (this.isSpare()) { return secondFrame._spareBonus(secondFrame) }
  return 0
}

Frame.prototype.isStrike = function () {
  return this._bowls.includes(this.MAX_SCORE)
}

Frame.prototype.isSpare = function () {
  return this._sumOfBowls() === this.MAX_SCORE && !this.isStrike()
}

Frame.prototype._strikeBonus = function (secondFrame, thirdFrame) {
  if (secondFrame.isStrike() && thirdFrame && thirdFrame._firstBowl()) {
    return secondFrame._sumOfBowls() + thirdFrame._firstBowl()
  }
  return secondFrame._sumOfBowls()
}

Frame.prototype._spareBonus = function (secondFrame) {
  if (!secondFrame._firstBowl()) { return 0 }
  return secondFrame._firstBowl()
}

Frame.prototype.isFinished = function () {
  return this.numberOfBowls() > 1 || this.isStrike()
}
