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
  if (this.numberOfBowls() == 0) {
    return 0
  } else if (this.numberOfBowls() == 1) {
    return this._firstBowl()
  } else {
    return this._firstBowl() + this._bowlPair[1]
  }
}

Frame.prototype.bowl = function (pins) {
  if (this._sumOfBowlPair() + pins > this.MAXIMUM_PINS) {
    throw `You can't knock over more than ${this.MAXIMUM_PINS} pins!`
  }
  this._bowlPair.push(pins)
}

Frame.prototype.getScore = function (nextFrame, nextNextFrame) {
  return this._sumOfBowlPair() + this._calculateBonus(nextFrame, nextNextFrame)
}

Frame.prototype._calculateBonus = function (nextFrame, nextNextFrame) {
  if (!nextFrame) {
    return 0
  } else if (this.isStrike()) {
    return this._strikeBonus(nextFrame, nextNextFrame)
  } else if (this.isSpare()) {
    return nextFrame._spareBonus(nextFrame)
  } else {
    return 0
  }
}

Frame.prototype.isStrike = function () {
  return this._bowlPair.includes(this.MAXIMUM_PINS)
}

Frame.prototype.isSpare = function () {
  return this._sumOfBowlPair() === this.MAXIMUM_PINS && !this.isStrike()
}

Frame.prototype._strikeBonus = function (nextFrame, nextNextFrame) {
  if (nextFrame.isStrike() && nextNextFrame && nextNextFrame._firstBowl()) {
    return nextFrame._sumOfBowlPair() + nextNextFrame._firstBowl()
  } else {
    return nextFrame._sumOfBowlPair()
  }
}

Frame.prototype._spareBonus = function (nextFrame) {
  if (!nextFrame._firstBowl()) {
    return 0
  } else {
    return nextFrame._firstBowl()
  }
}

Frame.prototype.isFinished = function () {
  return this.numberOfBowls() > 1 || this.isStrike()
}
