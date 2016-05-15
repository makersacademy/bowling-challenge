function Play(scoreCalculator) {
  this._frames = []
  this._scoreCalculator = typeof scoreCalculator !== "undefined" ?
                          scoreCalculator : new ScoreCalculator()
}

Play.prototype.knockDown = function(pinsDown) {
  this._addRoll(pinsDown)
}

Play.prototype.calculate = function() {
  return this._scoreCalculator.calculateTotal(this._frames)
}

Play.prototype._addRoll = function(pinsDown) {
  if(this._hasAnActiveFrame()) {
    this._addFrame(pinsDown)
  } else {
    this._lastFrame().addSecondRoll(pinsDown)
  }
}

Play.prototype._addFrame = function(pinsDown) {
  this._frames.push(new Frame(pinsDown))
}

Play.prototype._lastFrame = function() {
  return this._frames[this._frames.length - 1]
}

Play.prototype._hasAnActiveFrame = function() {
  return (this._lastFrame() === undefined || this._lastFrame().isComplete())
}
