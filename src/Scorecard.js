function Scorecard (frame = Frame) {
  this.frames = []
  this.frameConstructor = frame
}

Scorecard.prototype = {
  constructor: Scorecard,

  roll: function (roll) {
    this._throwErrorIfInvalidInput(roll)
    this._startNewFrameIfRequired()
    this._latestFrame().addRoll(roll)
    this._updateFrameScores()
  },

  total: function () {
    total = 0
    this.frames.forEach(function (frame) {
      if (frame.score !== null) {
        total += frame.score
      }
    })
    return total
  },

  isComplete: function () {
    return ((this.frames.length === 10) && (this._latestFrame().isComplete()))
  },

  _latestFrame: function () {
    return this.frames[this.frames.length - 1]
  },

  _updateFrameScores: function () {
    this._updateCurrentFrame()
  },

  _updateCurrentFrame: function () {
    var latestFrame = this._latestFrame()
    if (latestFrame.isComplete()) {
      if (latestFrame.roll2 !== null) {
        if (latestFrame.roll1 + latestFrame.roll2 < 10) {
          latestFrame.score = latestFrame.roll1 + latestFrame.roll2
        }
      }
    }
  },

  _startNewFrameIfRequired: function () {
    if ((this.frames.length === 0) || (this._latestFrame().isComplete())) {
      this.frames.push(new this.frameConstructor())
    }
  },

  _throwErrorIfInvalidInput: function(roll) {
    var validInput = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    if (!validInput.includes(roll)) {
      throw new Error('Could not record roll. Invalid input.')
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Scorecard
}
