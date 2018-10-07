'use strict'

function Game () {
  this._numberOfFrames = 10
  this._frames = []
}

Game.prototype = {

  enterDroppedPins: function (number = 0) {
    this._addFrameIfNecessary()
    this._findActive().enterRoll(number)
    this._findWaiting().forEach(function (frame){ frame.enterBonus(number) })
  },

  getCurrentFrame: function () { 
    return this._currentFrame
  },

  getNumberOfFrames: function () {
    return this._numberOfFrames
  },

  getDroppedPins: function () {
    return this._droppedPins
  },

  _addFrameIfNecessary: function () {
    if (
      this._isFirst() ||
      (!this._isLast() && this._findActive() === undefined)
    )
      this._addFrame()
  },

  _addFrame: function () {
    this._frames.push(new Frame())
  },

  _findActive: function () {
    return this._frames.find(function (frame) {
      return frame.getState() === 'active'
    })
  },

  _findWaiting: function () {
    return this._frames.filter(function (frame ) {
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

let _lastFrame = new Error('You cannot start a new frame')

