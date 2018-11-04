function Frame() {
  this._bowls = []
  this._score = 0
}

Frame.prototype.getScore = function (secondFrame, thirdFrame) {
  return this._sumOfBowls() + this._calculateBonus(secondFrame, thirdFrame)
}

Frame.prototype.getBowls = function () {
  return this._bowls
}

Frame.prototype.addBowl = function (pins) {
  this.getBowls().push(pins)
}

Frame.prototype.isFinished = function () {
  return this._bowls.length > 1 || this.isAStrike()
}

Frame.prototype.isAStrike = function() {
  return this._bowls.includes(10)
}

Frame.prototype.isASpare = function () {
  return this._sumOfBowls() === 10 && !this.isAStrike()
}

Frame.prototype._sumOfBowls = function () {
  return this._bowls.reduce(function (total, bowl) {
    return total + bowl
  }, 0)
}

Frame.prototype._calculateBonus = function (secondFrame, thirdFrame) {
  if (this.isAStrike()) {
    return this._strikeBonus(secondFrame, thirdFrame)
  } else if (this.isASpare()) {
    return this._spareBonus(secondFrame)
  } else {
    return 0
  }
}

Frame.prototype._spareBonus = function (secondFrame) {
  return secondFrame.getBowls()[0]
}

Frame.prototype._strikeBonus = function (secondFrame, thirdFrame) {
  if (secondFrame.isAStrike()) {
    return secondFrame.getBowls()[0] + thirdFrame.getBowls()[0]
  } else {
    return secondFrame._sumOfBowls()
  }
}
