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
  if (frame.rolls.length === 2) {
    return true
  }
  // let score = frame.rolls.reduce(function (a, c) {
  //   return a + c.pins
  // }, 0)
  return frame.rolls[0].pins === 10
}

Scorecard.prototype._isTenthFrame = function () {
  return this.frames.length === 10
}

Scorecard.prototype.updateFrameScores = function () {
  this.frames.forEach(function (frame, i, frames) {
    if (frame.complete) {
      let rolls = []
      rolls.push(frame.rolls[0])
      rolls.push(frame.rolls[1])
      if (frame.outcome === 'Strike') {
        let secondFrame = frames[i + 1]
        if (typeof secondFrame !== 'undefined') {
          rolls.push(secondFrame.rolls[0])
          rolls.push(secondFrame.rolls[1])
          if (secondFrame.outcome === 'Strike') {
            let thirdFrame = frames[i + 2]
            if (typeof thirdFrame !== 'undefined') {
              rolls.push(thirdFrame.rolls[0])
            }
          }
        }
      } else if (frame.outcome === 'Spare') {
        let secondFrame = frames[i + 1]
        if (typeof secondFrame !== 'undefined') {
          rolls.push(secondFrame.rolls[0])
        }
      }
      frame.score = rolls
        .filter(function (roll) {
          return typeof roll !== 'undefined'
        })
        .reduce(function (a, c) {
          return a + c.pins
        }, 0)
    } else {
      frame.score = 0
    }
  })
}

Scorecard.prototype.bowl = function (pinsKnockedDown) {
  let currentFrame = this._getCurrentFrame()
  currentFrame.bowl(pinsKnockedDown)
  currentFrame.setComplete(this._isFrameComplete(currentFrame))
  this.updateFrameScores()
}
