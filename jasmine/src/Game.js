'use strict'

function Game () {
  this._numberOfFrames = 10
  this._frames = []
}

Game.prototype = {

  enterDroppedPins: function (number = 0) {
    if (this._isFirst()) {
      this.addFrame()
    } else if (this._isLast()) {
      throw _lastFrame
    }
    this._frames[0].enterRoll(number)
  },

  addFrame: function () {
    this._frames.push(new Frame())
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

  _isFirst: function () {
    return this._frames.length === 0
  },

  _isLast: function () {
    return this._frames.length === this._numberOfFrames
  }

}

let _tooHigh = new Error('Enter a number between 1 and 10')
let _tooMany = new Error('You cannot drop more than 10 pins in one frame')
let _lastFrame = new Error('You cannot start a new frame')