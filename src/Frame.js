'use strict'

class Frame {
  constructor (num) {
    this._frameNumber = num
    this._score = 0
    this.roll = 0
    this._spare = false
    this._strike = false
    this._complete = false
  }

  complete () {
    return this._complete
  }

  add (number) {
    this._score += number
    this.roll += 1
    this._checkFrameEnd()
  }

  number () {
    return this._frameNumber
  }

  score () {
    return this._score
  }

  isSpare () {
    return this._spare
  }

  _checkFrameEnd () {
    if (this._score === 10) {
      this._spare = true
      this._complete = true
    } else if (this.roll === 2) {
      this._complete = true
    }
  }
}

module.exports = Frame
