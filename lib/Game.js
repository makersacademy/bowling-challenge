function Game (frameFactory) {
  if (typeof (require) !== 'undefined') {
    Frame = require('./Frame')
  }
  this._frames = []
  this._frameFactory = frameFactory || function () { return new Frame() }
}

Game.prototype = {
  constructor: Game,

  roll: function (pins) {
    this._addNewFrameIfRequired()
    this._lastFrame().addRoll(pins)
    this._checkForBonuses()
  },

  complete: function () {
    return (this._frames.length === 10 && this._lastFrame().isComplete())
  },

  score: function () {
    sum = 0
    this._frames.forEach(function (frame) {
      sum += frame.score()
    })
    return sum
  },

  _addNewFrame: function () {
    var frame = new this._frameFactory()
    this._frames.push(frame)
  },

  _lastFrame: function () {
    return this._frames[this._frames.length - 1]
  },

  _lastButOneFrame: function () {
    return this._frames[this._frames.length - 2]
  },

  _addNewFrameIfRequired: function () {
    if (this._frames.length === 0) {
      this._addNewFrame()
    } else if (this._lastFrame().isComplete()) {
      this._addNewFrame()
    }
  },

  _checkForBonuses: function () {
    this._checkCurrentRollForBonus()
    this._checkLastRollForBonus()
  },

  _checkCurrentRollForBonus: function () {
    var lastFrame = this._lastFrame()
    if (!lastFrame.isComplete()) {
      return
    }
    if (lastFrame.roll1 === 10) {
      return
    }
    if (lastFrame.roll1 + lastFrame.roll2 === 10) {
      return
    }
    lastFrame.addBonus(0)
  },

  _checkLastRollForBonus: function () {
    var lastFrame = this._lastFrame()
    var lastButOneFrame = this._lastButOneFrame()
    if (typeof (lastButOneFrame) === 'undefined') {
      return
    }
    if (lastFrame.roll2 !== null) {
      return
    }
    if (lastButOneFrame.isSpare()) {
      lastButOneFrame.addBonus(lastFrame.roll1)
    }
  }
}

if (typeof (module) !== 'undefined') {
  module.exports = Game
}
