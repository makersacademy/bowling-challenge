'use strict'

function Frame() {
  this._rolls = []
  this._bonusRolls = []
  this._state = 'active'

}

Frame.prototype = {
  // regular frame
  enterRoll: function (pins) {
    this._validateRoll(pins)
    this._rolls.push(pins)
    this._setState()
  },

  getRolls: function () {
    return this._rolls
  },
  // if frame is spare or strike
  enterBonus: function (pins) {
    this._validateRoll(pins)
    this._bonusRolls.push(pins)
    this._setState()
  },

  getBonus: function () {
    return this._bonusRolls
  },

  calculateScore: function () {
    return this._calculateBonus() + this._calculateRolls()
  },

  getState: function () {
    return this._state
  },
  // to indicate whether pins are bonus or regular, or frame is finished
  _setState: function () {
    if (this._isClosed()) {
      this._state = 'closed'
    } else if (this._isWaiting()) {
      this._state = 'waiting'
    }
  },

  _isWaiting: function () {
    // if strike
    if (this._isStrike()) {
      return this._bonusRolls.length < 2
    // if spare
    } else if (this._isSpare()) {
      return this._bonusRolls.length < 1
    } else {
    // for regular frame
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

  _isStrike: function () {
    return this._rolls[0] === 10
  },

  _isSpare: function () {
    return this._rolls[0] + this._rolls[1] === 10
  },

  _calculateRolls: function () {
    return this._rolls.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue
    }, 0)
  },

  _calculateBonus: function () {
    return this._bonusRolls.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue
    }, 0)
  },

  // only necessary for console - web interface adds validation
  _validateRoll: function (pins) {
    if (pins > 10) {
      throw _tooHigh
    }
    if (this._state === 'active' && this._rolls[0] + pins > 10){
      throw _tooMany
    }
  }
}

let _tooHigh = new Error('Enter a number between 1 and 10')
let _tooMany = new Error('You cannot drop more than 10 pins in one frame')
