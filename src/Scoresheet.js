'use strict'

class Scoresheet {
  constructor () {
    this.isComplete = false
    this.finalScore = 0
    this.rollCount = 0
    this.currentFrame = []
    this.wasSpare = false
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

    if (this.isFrameComplete() === true) {
      let score = this.calculateFrameScore()
      if (score === 10) { this.wasSpare = true }
      this.finalScore += score
      this.currentFrame = []
    }
  }

  isFrameComplete () {
    return (this.currentFrame.length === 2)
  }

  calculateFrameScore () {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return this.currentFrame.reduce(reducer)
  }
}
