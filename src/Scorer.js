function Scorer () {
  this.runningTotals = []
  this._rolls = []
  this._scoringIndex = 0
}

Scorer.prototype = {
  constructor: Scorer,

  addRoll: function (roll) {
    var updateScores
    this._rolls.push(roll)
    do {
      updateScores = this._tryUpdatingScores()
    } while (updateScores)
  },

  total: function () {
    return this._lastRunningTotal()
  },

  _tryUpdatingScores: function () {
    var i = this._scoringIndex
    if (this._scoredFrames() === 10) {
      return false
    }
    if (this._rolls[i] === 10) {
      // strike!
      return this._tryScoringStrike()
    } else if (this._rolls[i] + this._rolls[i + 1] === 10) {
      // spare!
      return this._tryScoringSpare()
    } else if (this._rolls[i + 1] !== undefined) {
      // just a normal frame
      this._scoreBasicFrame()
      return true
    } else {
      return false
    }
  },

  _tryScoringStrike: function () {
    var score; var i = this._scoringIndex
    if (this._rolls[i] !== undefined &&
        this._rolls[i + 1] !== undefined &&
        this._rolls[i + 2] !== undefined) {
      score = this._rolls[i] + this._rolls[i + 1] + this._rolls[i + 2]
      this._scoreFrame(score)
      this._scoringIndex += 1
      return true
    } else {
      return false
    }
  },

  _tryScoringSpare: function () {
    var score; var i = this._scoringIndex
    if (this._rolls[i + 2] !== undefined) {
      score = this._rolls[i] + this._rolls[i + 1] + this._rolls[i + 2]
      this._scoreFrame(score)
      this._scoringIndex += 2
      return true
    } else {
      return false
    }
  },

  _scoreBasicFrame: function () {
    var score; var i = this._scoringIndex
    score = this._rolls[i] + this._rolls[i + 1]
    this._scoreFrame(score)
    this._scoringIndex = i + 2
  },

  _scoreFrame: function (score) {
    this.runningTotals.push(this._lastRunningTotal() + score)
  },

  _scoredFrames: function () {
    return this.runningTotals.length
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
