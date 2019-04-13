function Game () {
  this._count = 0
}

Game.prototype = {
  constructor: Game,

  roll: function () {
    this._count++
  },

  lastRoll: function () {
    return 0
  },

  complete: function () {
    return (this._count == 20)
  },

  score: function () {
    return 0
  }
}

module.exports = Game
