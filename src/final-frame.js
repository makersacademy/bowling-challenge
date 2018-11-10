function FinalFrame() {
  Frame.call(this)
  this.MAX_SCORE = 30
  this.STRIKE_SCORE = 10
}

FinalFrame.prototype = Object.create(Frame.prototype)
FinalFrame.prototype.constructor = FinalFrame

FinalFrame.prototype.isFinished = function () {
  if (this.isStrike()) {
    return this._isMaxBowls()
  } else if (this.isSpare()) {
    return this._isMaxBowls()
  } else if (this._bowls.length > 1) {
    return true
  } else {
    return false
  }
}

FinalFrame.prototype.addBowl = function (pins) {
  if (this._firstBowl() + pins > this.STRIKE_SCORE && this._bowls.length < 2 && 
    !this.isStrike()) {
    throw 'Invalid entry - there are only 10 pins!'
  }
  this._bowls.push(pins)
}

FinalFrame.prototype.getScore = function () {
  return this._bowls.reduce(function (total, bowl) {
    return total + bowl
  }, 0)
}

FinalFrame.prototype.isStrike = function () {
  return this._bowls.includes(this.STRIKE_SCORE)
}

FinalFrame.prototype.isSpare = function () {
  return this._firstBowl() + this._bowls[1] === this.STRIKE_SCORE &&
    !this.isStrike()
}

FinalFrame.prototype._isMaxBowls = function () {
  return this._bowls.length > 2
}
