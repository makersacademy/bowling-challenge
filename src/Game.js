function Game () {
  this._rolls = []
  this.runningTotals = []
  this._frameBall = 0
}

Game.prototype = {
  constructor: Game,

  roll: function (roll) {
    this._rolls.push(roll)
    this._updateFrameBall()
    this._checkScoring()
  },

  score: function () {
    return this.runningTotals
  },

  _checkScoring: function () {
    if (this._frameBall === 2) {
      this.runningTotals.push(this._lastRunningTotal() +
                              this._lastRoll() +
                              this._secondLastRoll())
    }
  },

  _updateFrameBall: function () {
    this._frameBall = (this._frameBall % 2) + 1
  },

  _lastRoll: function () {
    return this._rolls[this._rolls.length - 1]
  },

  _secondLastRoll: function () {
    return this._rolls[this._rolls.length - 2]
  },

  _lastRunningTotal: function () {
    if (this.runningTotals.length === 0) {
      return 0
    }
    return this.runningTotals[this.runningTotals.length - 1]
  }
}

if (typeof (module) !== 'undefined') {
  module.exports = Game
}
