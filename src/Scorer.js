function Scorer () {
  this._rolls = []
  this.runningTotals = []
  this._scoringIndex = 0
}

Scorer.prototype = {
  constructor: Scorer,

  addRoll: function (roll) {
    this._rolls.push(roll)
    this._updateScores()
  },

  total: function () {
    return this._lastRunningTotal()
  },

  _updateScores: function () {
    var rolls
    var i = this._scoringIndex
    if (this._rolls[i] !== undefined &&
        this._rolls[i + 1] !== undefined) {
      // not a strike or spare
      rolls = this._rolls[i] + this._rolls[i + 1]
      this.runningTotals.push(this._lastRunningTotal() + rolls)
      this._scoringIndex = i + 2
    }
  },

  _lastRunningTotal: function () {
    if (this.runningTotals.length === 0) {
      return 0
    }
    return this.runningTotals[this.runningTotals.length - 1]
  }
}

if (typeof (module) !== 'undefined') {
  module.exports = Scorer
}
