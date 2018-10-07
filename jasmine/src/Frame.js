'use strict'

function Frame() {
  this._rolls = []
  this._bonusRolls = []
  // this._isStrike
  // this._isSpare
  // this._isLast
  this._state = 'active'

}

Frame.prototype = {
  // regular frame
  enterRoll: function (pins) {
    this._validateRoll(pins)
    this._rolls.push(pins)

  },

  getRolls: function () {
    return this._rolls
  },
  // if frame is spare or strike
  enterBonus: function (pins) {
    this._validateRoll(pins)
    this._bonusRolls.push(pins)
  },

  getBonus: function () {
    return this._bonusRolls
  },

  setState: function () {
    if (this._isClosed()) {
      this._state = 'closed'
    } else if (this._isWaiting()) {
      this._state = 'waiting'
    }
  },

  getState: function () {
    return this._state
  },

  _isWaiting: function () {
    // if strike
    if (this._bonusRolls.length < 2 && this._rolls[0] === 10) {
      return true
    // if spare
    } else if (this._bonusRolls.length < 1 && this._rolls[0] + this._rolls[1] === 10) {
      return true
    } else {
      return false
    }
  },

  _isClosed: function () {
    // strike
    if (this._bonusRolls.length === 2) {
      return true
    // spare
    } else if (this._rolls.length === 2 && this._bonusRolls.length === 1) {
      return true
    // regular frame
    } else {
      return (this._rolls.length === 2 && this._rolls[0] + this._rolls[1] < 10)
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
