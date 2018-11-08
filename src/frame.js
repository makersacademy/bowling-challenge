'use strict'

function Frame() {
  this._bowls = []
}

Frame.prototype.getScore = function (secondFrame, thirdFrame) {
  return this._sumOfBowls() + this._calculateBonus(secondFrame, thirdFrame)
}

Frame.prototype.getBowls = function () {
  return this._bowls
}

Frame.prototype.addBowl = function (pins) {
  this._bowls.push(pins)
}

Frame.prototype.isFinished = function () {
  return this._bowls.length > 1 || this.isStrike()
}

Frame.prototype.isStrike = function() {
  return this._bowls.includes(10)
}

Frame.prototype.isSpare = function () {
  return this._sumOfBowls() === 10 && !this.isStrike()
}

Frame.prototype._sumOfBowls = function () {
  return this._bowls.reduce(function (total, bowl) {
    return total + bowl
  }, 0)
}

Frame.prototype._calculateBonus = function (secondFrame, thirdFrame) {
  if (!secondFrame) {
    return 0
  } else if (this.isStrike()) {
    return secondFrame._strikeBonus(thirdFrame)
  } else if (this.isSpare()) {
    return this._spareBonus(secondFrame)
  } else {
    return 0
  }
}

Frame.prototype._spareBonus = function (secondFrame) {
  if (!secondFrame || !secondFrame._firstBowl()) {
    return 0
  }
  return secondFrame._firstBowl()
}

Frame.prototype._strikeBonus = function(thirdFrame) {
  if (this.isStrike() && !!thirdFrame && !!thirdFrame._firstBowl()) {
    return this._sumOfBowls() + thirdFrame._firstBowl();
  }
  return this._sumOfBowls()
};

Frame.prototype._firstBowl = function () {
  return this._bowls[0]
}
