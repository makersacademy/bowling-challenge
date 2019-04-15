function Game (scorer) {
  if (typeof (require) !== 'undefined') {
    Scorer = require('./Scorer')
  }

  this._scorer = scorer || new Scorer()
}

Game.prototype = {
  constructor: Game,

  roll: function (roll) {
    this._scorer.addRoll(roll)
  },

  runningTotals: function () {
    return this._scorer.runningTotals
  },

  score: function () {
    return this._scorer.total()
  },

  isComplete: function () {
    return this._scorer.runningTotals.length === 10
  }
}

if (typeof (module) !== 'undefined') {
  module.exports = Game
}
