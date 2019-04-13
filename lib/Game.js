Frame = require ('./Frame')

function Game () {
  this._count = 0
  this._frames = []
}

Game.prototype = {
  constructor: Game,

  roll: function (pins) {
    if (this._frames.length === 0) {
      this._frames.push(new Frame())
    } else if (this._frames[this._frames.length - 1].isComplete()) {
      this._frames.push(new Frame())
    }
    this._frames[this._frames.length - 1].addRoll(pins)
  },

  lastRoll: function () {
    return 0
  },

  complete: function () {
    return (this._frames.length == 10 && this._frames[9].isComplete())
  },

  score: function () {
    sum = 0
    this._frames.forEach(function(frame) {
      sum += frame.score()
    })
    return sum
  }
}

module.exports = Game
