var FrameModel = function(frameNumber) {
  this.frameNumber = frameNumber
  this._rolls = []
  this._loc = 0
}

FrameModel.prototype.addRoll = function(selection) {
  this._rolls.push(selection)
  return this._checkStatus()
}

FrameModel.prototype._checkStatus = function() {
  if (this._loc == 0) {
    if (this._rolls[0] == 10) {
      this._loc = 2
    }
    else {
      this._loc = 1
    }
  }
  if (this._loc == 1) {
    if ((this._rolls[0] + this._rolls[1]) == 10) {
      this._loc = 3
    }
    else {
      return [this._totalScore(), this.frameNumber]
    }
  }
  if (this._loc == 2) {
    this._loc == 3
  }
  if (this._loc == 3) {
    return [this._totalScore(), this.frameNumber]
  }
}

FrameModel.prototype._totalScore = function() {
  return this._rolls.reduce((a, b) => a + b, 0)
}
