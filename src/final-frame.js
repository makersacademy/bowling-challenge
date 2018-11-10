function FinalFrame() {
  Frame.call(this)
}

FinalFrame.prototype = Object.create(Frame.prototype)
FinalFrame.prototype.constructor = FinalFrame

FinalFrame.prototype.isFinished = function () {
  if (this.isStrike() && this._bowls.length > 2) {
    return true
  } else if (this.isSpare() && this._bowls.length > 2) {
    return true
  } else if (this._bowls.length > 1) {
    return true
  } else {
    return false
  }
}
