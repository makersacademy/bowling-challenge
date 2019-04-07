function Scorecard () {
  this._total = 0
  this._rolls = 0
  this.frames = []
}

Scorecard.prototype = {
  constructor: Scorecard,

  roll: function () {
    if ((this.frames.length === 0) || (this._latestFrame().isComplete())) {
      this.frames.push(new Frame())
    } else {
      this._latestFrame().complete()
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
