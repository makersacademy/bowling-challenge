function Scorecard () {
  this._total = 0
  this.frames = []
}

Scorecard.prototype = {
  constructor: Scorecard,

  roll: function (roll) {
    this._throwErrorIfInvalidInput(roll)
    this._startNewFrameIfRequired()
    this._latestFrame().addRoll(roll)
  },

  total: function () {
    return 0
  },

  isComplete: function () {
    return ((this.frames.length === 10) && (this._latestFrame().isComplete()))
  },

  _latestFrame: function () {
    return this.frames[this.frames.length - 1]
  },

  _startNewFrameIfRequired: function () {
    if ((this.frames.length === 0) || (this._latestFrame().isComplete())) {
      this.frames.push(new Frame())
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
