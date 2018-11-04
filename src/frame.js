function Frame() {
  this._bowls = []
  this._score = 0
}

Frame.prototype.getScore = function (secondFrame) {
  return this._sumOfBowls() + this._calculateBonus(secondFrame)
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

Frame.prototype._calculateBonus = function (secondFrame) {
  if (this.isAStrike()) {
    return 7
  } else if (this.isASpare()) {
    return this._spareBonus(secondFrame)
  } else {
    return 0
  }
}

Frame.prototype._spareBonus = function (secondFrame) {
  return secondFrame.getBowls()[0]
}
