'use strict'

class Frame {
  constructor (num) {
    this._frameNumber = num
    this._score = []
    this.roll = 0
    this._spare = false
    this._strike = false
    this._complete = false
  }

  complete () {
    return this._complete
  }

  add (number) {
    if (this.roll === 2) {
      this.addBonusScore(number)
      return
    }
    this._score.push(number)
    this.roll += 1
    this._checkFrameEnd()
  }

  number () {
    return this._frameNumber
  }

  firstRoll () {
    return this._score[0]
  }

  score () {
    let score = 0
    this._score.forEach(function (num) {
      score += num
    })
    return score
  }

  isSpare () {
    return this._spare
  }

  _checkFrameEnd () {
    if (this.score() === 10) {
      this._spare = true
      this._complete = true
    } else if (this.roll === 2) {
      this._complete = true
    }
  }

  addBonusScore (num) {
    this._score.push(num)
  }
}

module.exports = Frame
