'use strict'

class Frame {
  constructor (number, pins) {
    this._number = number
    this._pins = pins
    this._rolls = []
    this._open = true
    this._bonus = 0
  }

  addRoll (pins) {
    if (this.lastRollBonus()) pins = 0
    this.current = pins
    if (this.isClosed()) this._open = false
    if (this.isStrike()) { return this._bonus = 2 }
    if (this.isSpare()) { return this._bonus = 1 }
    // else { return this._bonus = 0 }
  }

  isClosed () {
    return (this._number < 10 && (this.isStrike() || this._rolls.length === 2)) ||
      (this._rolls.length === 2 && !(this.isStrike() || this.isSpare())) ||
      this._rolls.length === 3
  }

  isStrike () {
    return (this._number < 10 && this._rolls.length === 1 && this._pins === 10) ||
    (this._number === 10 && this._rolls.length < 3 && this._pins === 10)
  }

  isSpare () {
    return this._rolls.length === 2 && this._rolls.reduce((a, b) => a + b) === 10
  }

  lastRollBonus () {
    return this._number === 10 && this._rolls.length >= 1 && this._rolls.reduce((a, b) => a + b) === 10
  }

  get number () {
    return this._number
  }

  get bonus () {
    return this._bonus
  }

  get open () {
    return this._open
  }

  get pins () {
    return this._pins
  }

  get rolls () {
    return this._rolls
  }

  set current (pins) {
    this._rolls.push(pins)
  }
}
