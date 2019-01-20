'use strict'

class Scoresheet {
  constructor () {
    this.isComplete = false
    this.finalScore = 0
    this.rollCount = 0
    this.currentFrame = []
    this.wasSpare = false
    this.wasStrike = false
  }

  roll (currentRoll) {
    this.calculateSpareBonus(currentRoll)
    this.updateFrame(currentRoll)

    this.rollCount += 1
    if (this.rollCount === 20) { this.isComplete = true }
    return this.finalScore
  }

  calculateSpareBonus (currentRoll) {
    if (this.wasSpare === true) {
      this.finalScore += currentRoll
      this.wasSpare = false
    }
  }

  updateFrame (currentRoll) {
    this.currentFrame.push(currentRoll)

    if (this._isFrameComplete() === true) {
      let score = this.currentFrame.reduce((score, pins) => score + pins)
      this.checkSpare(score)
      this.finalScore += score
      this.currentFrame = []
    }
  }

  _isFrameComplete () {
    return (this.currentFrame.length === 2)
  }

  checkStrike (currentRoll) {
    if (currentRoll === 10) { this.wasStrike = true }
  }

  checkSpare (score) {
    if (score === 10) { this.wasSpare = true }
  }
}
