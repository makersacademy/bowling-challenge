Frame = require ('./Frame')

function Game (frameConstructor = Frame) {
  this._count = 0
  this._frames = []
  this._frameConstructor = frameConstructor
}

Game.prototype = {
  constructor: Game,

  roll: function (pins) {
    this._addNewFrameIfRequired()
    this._latestFrame().addRoll(pins)
  },

  lastRoll: function () {
    return 0
  },

  complete: function () {
    return (this._frames.length == 10 && this._latestFrame().isComplete())
  },

  score: function () {
    sum = 0
    this._frames.forEach(function(frame) {
      sum += frame.score()
    })
    return sum
  },

  _addNewFrame: function () {
    var frame = new this._frameConstructor()
    this._frames.push(frame)
  },

  _latestFrame: function () {
    return this._frames[this._frames.length - 1]
  },

  _addNewFrameIfRequired: function () {
    if (this._frames.length === 0) {
      this._addNewFrame()
    } else if (this._latestFrame().isComplete()) {
      this._addNewFrame()
    }
  }
}

module.exports = Game
