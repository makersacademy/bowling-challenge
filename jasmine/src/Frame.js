'use strict'

function Frame() {
  this._rolls = []
  this._bonusRolls = []
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

  getBonusRolls: function () {
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
    if (this._isStrike()) {
      return this._bonusRolls.length < 2
    // if spare
    } else if (this._isSpare()) {
      return this._bonusRolls.length < 1
    } else {
      return false
    }
  },

  _isClosed: function () {
    // spare
    if (this._isSpare()) {
      return this._bonusRolls.length === 1
    // strike
    } else if (this._isStrike()) {
      return this._bonusRolls.length === 2
    // regular frame
    } else {
      return this._rolls.length === 2
    }
  },

  // refactor
  _isStrike: function () {
    return this._rolls[0] === 10
  },
  // refactor
  _isSpare: function () {
    return this._rolls[0] + this._rolls[1] === 10
  },

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

let _tooHigh = new Error('Enter a number between 1 and 10')
let _tooMany = new Error('You cannot drop more than 10 pins in one frame')
