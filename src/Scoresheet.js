'use strict'

class Scoresheet {
  constructor () {
    this.isComplete = false
    this.finalScore = 0
    this.rollCount = 0
  }

  roll (nrOfPins) {
    this.rollCount += 1
    this.finalScore += nrOfPins
    if (this.rollCount === 20) { this.isComplete = true }
  }
}
