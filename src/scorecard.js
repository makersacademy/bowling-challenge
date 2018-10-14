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
  if (!this._gameHasStarted() || this._lastFrame().complete) {
    return this._createNewFrame()
  }
  return this._lastFrame()
}

Scorecard.prototype._lastFrame = function () {
  return this.frames[this.frames.length - 1]
}

Scorecard.prototype._isTenthFrame = function () {
  return this.frames.length === 10
}

Scorecard.prototype._nextThreeRolls = function (frame, i, frames) {
  let firstRoll
  let secondRoll
  let thirdRoll
  if (typeof frame.rolls[0] !== 'undefined') {
    firstRoll = frame.rolls[0]
    if (firstRoll.outcome === 'Strike') {
      if (
        typeof frames[i + 1] !== 'undefined' &&
        typeof frames[i + 1].rolls[0] !== 'undefined'
      ) {
        secondRoll = frames[i + 1].rolls[0]
        if (secondRoll.outcome === 'Strike') {
          if (
            typeof frames[i + 2] !== 'undefined' &&
            typeof frames[i + 2].rolls[0] !== 'undefined'
          ) {
            thirdRoll = frames[i + 2].rolls[0]
            frame.complete = true
          }
        } else if (typeof frames[i + 1].rolls[1] !== 'undefined') {
          thirdRoll = frames[i + 1].rolls[1]
          frame.complete = true
        }
      }
    }
    if (typeof frame.rolls[1] !== 'undefined') {
      secondRoll = frame.rolls[1]
      if (secondRoll.outcome === 'Spare') {
        if (
          typeof frames[i + 1] !== 'undefined' &&
          typeof frames[i + 1].rolls[0] !== 'undefined'
        ) {
          thirdRoll = frames[i + 1].rolls[0]
          frame.complete = true
        }
      } else {
        frame.complete = true
      }
    }
  }
  return [firstRoll, secondRoll, thirdRoll]
}

Scorecard.prototype._processFrames = function () {
  let self = this
  this.frames.forEach(function (frame, i, frames) {
    let rolls = self._nextThreeRolls(frame, i, frames)
    if (frame.complete) {
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
  this._processFrames()
}
