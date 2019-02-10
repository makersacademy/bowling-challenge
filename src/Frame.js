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

  isComplete () {
    return this._complete
  }

  add (number) {
    if (this.isComplete() && this.isSpare()) {
      this._addSpareBonusScore(number)
      return
    } else if (this.isComplete() && this.isStrike()) {
      this._addStrikeBonusScore(number)
      return
    }
    if (!this.isComplete()) {
      this._addRoutineScore(number)
    }
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

  thirdRoll () {
    return this._score[2]
  }

  frameScore () {
    let score = 0
    this._score.forEach(function (num) {
      score += num
    })
    return score
  }

  isSpare () {
    return this._spare
  }

  isStrike () {
    return this._strike
  }

  _addRoutineScore (number) {
    this._score.push(number)
    this.roll += 1
    this._checkFrameEnd()
  }

  _addSpareBonusScore (number) {
    if (this._bonus === 0) {
      this._addBonusScore(number)
      this._bonus += 1
    }
  }

  _addStrikeBonusScore (number) {
    if (this._bonus <= 1) {
      this._addBonusScore(number)
      this._bonus += 1
    }
  }

  _checkFrameEnd () {
    this._checkStrike()
    this._checkSpare()
    this._checkRollsFinished()
  }

  _checkStrike () {
    if (this.frameScore() === 10 && this.roll === 1) {
      this._strike = true
      this._complete = true
      return true
    }
  }

  _checkSpare () {
    if (!this.isStrike() && this.frameScore() === 10) {
      this._spare = true
      this._complete = true
    }
  }

  _checkRollsFinished () {
    if (this.roll === 2) {
      this._complete = true
    }
  }

  _addBonusScore (num) {
    this._score.push(num)
  }
}

module.exports = Frame
