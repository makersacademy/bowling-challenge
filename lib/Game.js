function Game () {}

Game.prototype = {
  constructor: Game,

  roll: function () {
  },

  lastRoll: function () {
    return 0
  },

  complete: function () {
    return true
  },

  score: function () {
    return 0
  }
}

module.exports = Game
