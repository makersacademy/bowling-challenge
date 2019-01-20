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
    this.checkStrike(currentRoll)

    this.rollCount++
    if (this.rollCount === 20) { this.isComplete = true }
    return this.finalScore
  }

  calculateSpareBonus (currentRoll) {
    if (this.wasSpare === true) {
      this.finalScore += currentRoll
      this.wasSpare = false
    }
  }

  calculateStrikeBonus (frameScore) {
    if (this.wasStrike === true) {
      this.finalScore += frameScore
      this.wasStrike = false
    }
  }

  updateFrame (currentRoll) {
    this.currentFrame.push(currentRoll)

    if (this._isFrameComplete() === true) {
      let frameScore = this.currentFrame.reduce((score, pins) => score + pins)
      this.checkSpare(frameScore)
      this.calculateStrikeBonus(frameScore)
      this.finalScore += frameScore
      this.currentFrame = []
    }
  }

  _isFrameComplete () {
    return (this.currentFrame.length === 2)
  }

  checkStrike (currentRoll) {
    if (currentRoll === 10) {
      this.wasStrike = true
      this.rollCount++
      this.finalScore += 10
      this.currentFrame = []
    }
  }

  checkSpare (score) {
    if (score === 10) { this.wasSpare = true }
  }
}
