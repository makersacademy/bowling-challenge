'use strict'

function Frame () {
  this._bowlPair = []
  this.MAXIMUM_PINS = 10
}

Frame.prototype.getBowls = function () {
  return this._bowlPair
}

Frame.prototype._firstBowl = function () {
  return this._bowlPair[0]
}

Frame.prototype.numberOfBowls = function () {
  return this._bowlPair.length
}

Frame.prototype._sumOfBowlPair = function () {
  if (this.numberOfBowls() < 1) { return 0 }
  if (this.numberOfBowls() < 2) { return this._firstBowl() }
  return this._firstBowl() + this._bowlPair[1]
}

Frame.prototype.addBowl = function (pins) {
  if (this._sumOfBowlPair() + pins > this.MAXIMUM_PINS) {
    throw `You can't knock over more than ${MAXIMUM_PINS} pins!`
  }
  this._bowlPair.push(pins)
}

Frame.prototype.getScore = function (secondFrame, thirdFrame) {
  if (this.numberOfBowls() > 0) {
    return this._sumOfBowlPair() + this._calculateBonus(secondFrame, thirdFrame)
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
  return this._bowlPair.includes(this.MAXIMUM_PINS)
}

Frame.prototype.isSpare = function () {
  return this._sumOfBowlPair() === this.MAXIMUM_PINS && !this.isStrike()
}

Frame.prototype._strikeBonus = function (secondFrame, thirdFrame) {
  if (secondFrame.isStrike() && thirdFrame && thirdFrame._firstBowl()) {
    return secondFrame._sumOfBowlPair() + thirdFrame._firstBowl()
  }
  return secondFrame._sumOfBowlPair()
}

Frame.prototype._spareBonus = function (secondFrame) {
  if (!secondFrame._firstBowl()) { return 0 }
  return secondFrame._firstBowl()
}

Frame.prototype.isFinished = function () {
  return this.numberOfBowls() > 1 || this.isStrike()
}
