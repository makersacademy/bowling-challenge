function Scorer () {
  this.runningTotals = []
  this._rolls = []
  this._scoringIndex = 0
}

Scorer.prototype = {
  constructor: Scorer,

  addRoll: function (roll) {
    var update
    this._rolls.push(roll)
    do {
      update = this._updateScores()
    } while (update)
  },

  total: function () {
    return this._lastRunningTotal()
  },

  _updateScores: function () {
    var score
    var i = this._scoringIndex
    if (this._rolls[i] === 10) {
      // strike!
      if (this._rolls[i] !== undefined &&
          this._rolls[i + 1] !== undefined &&
          this._rolls[i + 2] !== undefined) {
        score = this._rolls[i] +
                this._rolls[i + 1] +
                this._rolls[i + 2]
        this.runningTotals.push(this._lastRunningTotal() + score)
        this._scoringIndex = i + 1

        return true
      } else {
        return false
      }
    }
    if (this._rolls[i] + this._rolls[i + 1] === 10) {
      // spare!
      if (this._rolls[i + 2] !== undefined) {
        score = this._rolls[i] +
                this._rolls[i + 1] +
                this._rolls[i + 2]
        this.runningTotals.push(this._lastRunningTotal() + score)
        this._scoringIndex = i + 2
        return true
      } else {
        return false
      }
    }
    if (this._rolls[i] !== undefined &&
        this._rolls[i + 1] !== undefined) {
      // not a strike or spare
      score = this._rolls[i] + this._rolls[i + 1]
      this.runningTotals.push(this._lastRunningTotal() + score)
      this._scoringIndex = i + 2
      return true
    } else {
      return false
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
