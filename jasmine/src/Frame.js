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
    // if frame is spare or strike
    // enterBonus: function () {},

  setState: function () {
    if (this._isBonus()) {
      this._state = Symbol('bonus')
    } else if (this._isClosed()) {
      this._state = Symbol('closed')
    } else if (this._isActive()) {
      this._state = Symbol('active')
    }
  },

  getState: function () {
    return this._state
  },

  _isClosed: function () {
    // strike
    if (this._rolls[0] === 10 && this._rolls.length === 3) {
      return true
    // spare
    } else if (this._rolls[0] + this._rolls[1] === 10 && this._rolls.length === 3) {
      return true
    }
    // regular frame
    return (this._rolls.length === 2 && this._rolls[0] + this._rolls[1] < 10)
  },

  _isBonus: function () {
    // if strike
    if (this._rolls[0] === 10) {
      return true
    }
    // if spare
    return this._rolls[0] + this._rolls[1] === 10
  },

  _isActive: function () {
    // if empty
    if (this._rolls.length === 0) {
      return true
    // after one roll when roll was not a strike
    } else if (this._rolls.length === 1 && this._rolls[0] !== 10 ) {
      return true
    }
  },

  // isStrike: function () {
    
  // },

  // isSpare: function () {

  // },

  _validateRoll: function (pins) {
    let max = 10
    
    if (pins > max) {
      throw _tooHigh
    } else if (pins + this._rolls[0] > max ){
      throw _tooMany
    }
  }

}
