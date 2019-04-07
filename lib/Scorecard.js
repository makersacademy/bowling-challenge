function Scorecard () {
  this._total = 0
  this._rolls = 0
}

Scorecard.prototype = {
  constructor: Scorecard,

  roll: function () {
    this._rolls++
  },

  total: function () {
    return 0
  },

  isComplete: function () {
    return (this._rolls === 20)
  }
}

module.exports = Scorecard
