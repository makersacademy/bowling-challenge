function Scorecard (frames = []) {
  this.frames = frames
  this.totalScore = 0
}

Scorecard.prototype._createNewFrame = function () {
  this.frames.push(new Frame())
  return this._lastFrame()
}

Scorecard.prototype._gameHasStarted = function () {
  return this.frames.length > 0
}

Scorecard.prototype._getCurrentFrame = function () {
  if (!this._gameHasStarted() || this._isFrameComplete(this._lastFrame())) {
    return this._createNewFrame()
  }
  return this._lastFrame()
}

Scorecard.prototype._lastFrame = function () {
  return this.frames[this.frames.length - 1]
}

Scorecard.prototype._isFrameComplete = function (frame) {
  if (this._isTenthFrame()) {
    return false
  }
  if (typeof frame.rolls === 'undefined') {
    return false
  }
  let score = frame.rolls.reduce(function (a, c) {
    return a + c.pins
  }, 0)
  return score === 10
}

Scorecard.prototype._isTenthFrame = function () {
  return this.frames.length === 10
}

Scorecard.prototype.bowl = function (pinsKnockedDown) {
  let currentFrame = this._getCurrentFrame()
  currentFrame.bowl(pinsKnockedDown)
  currentFrame.setComplete(this._isFrameComplete(currentFrame))
}
