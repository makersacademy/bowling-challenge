function Scorecard () {
}

Scorecard.prototype = {
  constructor: Scorecard,

  roll: function () {},

  total: function () {
    return 0
  },

  isComplete: function () {
    return true
  }
}

module.exports = Scorecard
