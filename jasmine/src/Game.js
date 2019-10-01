'use strict'

function Game () {
  this._numberOfFrames = 10
  this._frames = []
}

Game.prototype = {

  enterDroppedPins: function (number = 0) {
    this._addFrameIfNecessary()
    this._findWaitingFrames().forEach(function (frame){
      frame.enterBonus(number)
    })
    if (this._findActiveFrame()) {
      this._findActiveFrame().enterRoll(number)
    }
  },

  getFrame: function (number) {
    return this._frames[number - 1]
  },

  getCurrentFrameNumber: function () { 
    return this._frames.length
  },

  getNumberOfFrames: function () {
    return this._numberOfFrames
  },

  getDroppedPins: function () {
    return this._frames.map(function (frame) {
      return frame.getRolls()
    })
  },
  
  getBonusRolls: function () {
    return this._frames.map(function (frame) {
      return frame.getBonus()
    })
  },

  getCurrentScore: function () {
    return this._frames.map(function (frame) {
      return frame.calculateScore()}).reduce(function(acc, value){
        return acc + value
      },0)
  },

  _addFrameIfNecessary: function () {
    if (
      this._isFirst() ||
      (!this._isLast() && this._findActiveFrame() === undefined)
    )
      this._addFrame()
  },

  _addFrame: function () {
    this._frames.push(new Frame())
  },

  _findActiveFrame: function () {
    return this._frames.find(function (frame) {
      return frame.getState() === 'active'
    })
  },

  _findWaitingFrames: function () {
    return this._frames.filter(function (frame) {
      return frame.getState() === 'waiting'
    })
  },

  _isFirst: function () {
    return this._frames.length === 0
  },

  _isLast: function () {
    return this._frames.length === this._numberOfFrames
  }
  
}
