'use strict'

function Frame() {
  this._rolls = []
  // this._isStrike
  // this._isSpare
  // this._isLast
  this._state = ''

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
    if (this._isClosed()) {
      this._state = 'closed'
    } else if (this._isActive()) {
      this._state = 'active'
    } else if (this._isBonus()) {
      this._state = 'bonus'
    }
  },

  getState: function () {
    return this._state
  },

  _isClosed: function () {
    // strike
    if (this._rolls.length === 3 && this._rolls[0] === 10) {
      return true
    // spare
    } else if (this._rolls.length === 3 && this._rolls[0] + this._rolls[1] === 10) {
      return true
    // regular frame
    } else {
    return (this._rolls.length === 2 && this._rolls[0] + this._rolls[1] < 10)
    }
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
    // if first roll
    if (this._rolls.length === 0) {
      return true
    // if first roll was not a strike
    } else if (this._rolls.length === 1 && this._rolls[0] < 10) {
      return true
    } else {
      return false
    }
  },
  // refactor
  // isStrike: function () {
    
  // },
  // refactor
  // isSpare: function () {

  // },

  _validateRoll: function (pins) {
    // let max = 10
    if (pins > 10) {
      throw _tooHigh
    }
    // if (pins > max) {
    //   throw _tooHigh
    // } else if ((this.getState() !== 'bonus') && (pins + this._rolls[0]) > max ){
    //   throw _tooMany
    // }
  }

}
