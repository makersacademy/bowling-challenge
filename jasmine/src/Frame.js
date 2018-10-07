'use strict'

function Frame() {
  this._rolls = []
  // this._isStrike
  // this._isSpare
  // this._isLast
  this._state = Symbol()

}

Frame.prototype = {
  getRolls: function () {
    return this._rolls
  },

  enterRoll: function (pins) {
    this._validateRoll(pins)
    this._rolls.push(pins)

  },

  setState: function () {

  },

  isClosed: function () {
  
  },

  isActive: function () {

  },

  isBonus: function () {

  },
  // enterBonus: if frame is spare or strike

  // isStrike: function () {
    
  // }

  // isSpare:
  _validateRoll: function (pins) {
    let max = 10
    
    if (pins > max) {
      throw _tooHigh
    } else if (pins + this._rolls[0] > max ){
      throw _tooMany
    }
  }
}
