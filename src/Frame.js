'use strict'

class Frame {
  constructor (num) {
    this._frameNumber = num
    this._score = []
    this.roll = 0
    this._spare = false
    this._strike = false
    this._complete = false
    this._bonus = 0
  }

  complete () {
    return this._complete
  }

  add (number) {
    if (this.complete() && this.isSpare()) {
      this._spareCalculation(number)
      return
    } else if (this.complete() && this.isStrike()) {
      this._strikeCalculation(number)
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

  secondRoll () {
    return this._score[1]
  }

  score () {
    let score = 0
    this._score.forEach(function (num) {
      score += num
    })
    return score
  }

  _spareCalculation (number) {
    if (this._bonus === 0) {
      this.addBonusScore(number)
      this._bonus += 1
    }
  }

  _strikeCalculation (number) {
    if (this._bonus <= 1) {
      this.addBonusScore(number)
      this._bonus += 1
    }
  }

  isSpare () {
    return this._spare
  }

  isStrike () {
    return this._strike
  }

  _checkFrameEnd () {
    if (this.score() === 10 && this.roll === 1) {
      this._strike = true
      this._complete = true
    } else if (this.score() === 10) {
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
