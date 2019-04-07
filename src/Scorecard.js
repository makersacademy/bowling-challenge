function Scorecard () {
  this._total = 0
  this._rolls = 0
  this.frames = []
}

Scorecard.prototype = {
  constructor: Scorecard,

  roll: function (roll) {
    if ((this.frames.length === 0) || (this._latestFrame().isComplete())) {
      var frame = new Frame()
      frame.roll1 = roll
      this.frames.push(frame)
    } else {
      this._latestFrame().complete()
      this._latestFrame().roll2 = roll
    }
    this._rolls++
  },

  total: function () {
    return 0
  },

  isComplete: function () {
    return (this._rolls === 20)
  },

  _latestFrame: function () {
    return this.frames[this.frames.length - 1]
  }
}

if (typeof module !== 'undefined') {
  module.exports = Scorecard
}
