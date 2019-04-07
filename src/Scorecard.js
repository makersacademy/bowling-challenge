function Scorecard () {
  this._total = 0
  this.frames = []
}

Scorecard.prototype = {
  constructor: Scorecard,

  roll: function (roll) {
    if (this._invalidInput(roll)) {
      throw new Error('Could not record roll. Invalid input.')
    }
    if ((this.frames.length === 0) || (this._latestFrame().isComplete())) {
      this.frames.push(new Frame())
    }
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

  _invalidInput: function (input) {
    if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(input)) {
      return false
    } else {
      return true
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Scorecard
}
