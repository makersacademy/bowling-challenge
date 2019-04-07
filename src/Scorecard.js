function Scorecard () {
  this._total = 0
  this.frames = []
}

Scorecard.prototype = {
  constructor: Scorecard,

  roll: function (roll) {
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
  }
}

if (typeof module !== 'undefined') {
  module.exports = Scorecard
}
