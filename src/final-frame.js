function FinalFrame () {
  Frame.call(this)
  this.STRIKE_SCORE = 10
}

FinalFrame.prototype = Object.create(Frame.prototype)
FinalFrame.prototype.constructor = FinalFrame

FinalFrame.prototype.getScore = function () {
  return this._bowls.reduce(function (total, bowl) {
    return total + bowl
  }, 0)
}

FinalFrame.prototype.addBowl = function (pins) {
  if (this._firstBowl() + pins > this.STRIKE_SCORE && this._bowls.length < 2 &&
    !this.isStrike()) {
    throw 'Invalid entry - there are only 10 pins!'
  }
  this._bowls.push(pins)
}

FinalFrame.prototype.isStrike = function () {
  return this._bowls.includes(this.STRIKE_SCORE)
}

FinalFrame.prototype.isSpare = function () {
  return this._firstBowl() + this._bowls[1] === this.STRIKE_SCORE &&
    !this.isStrike()
}

FinalFrame.prototype.isFinished = function () {
  if (this.isStrike() || this.isSpare()) {
    return this.numberOfBowls() > 2
  }
  return this.numberOfBowls() > 1
}
