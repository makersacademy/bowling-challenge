'use strict'

class Scoresheet {
  constructor () {
    this.isComplete = false
    this.finalScore = 0
    this.rollCount = 0
    this.currentFrame = []
  }

  roll (currentRoll) {
    this.rollCount += 1
    this.currentFrame.push(currentRoll)
    this.finalScore += currentRoll
    if (this.isSpare()) { this.finalScore += currentRoll }
    if (this.rollCount === 20) { this.isComplete = true }
    return currentRoll
  }

  isSpare () {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    let frameScore = this.currentFrame.reduce(reducer)
    return (frameScore === 10 ? true : false)
  }

  isFrameComplete () {
    return (this.currentFrame.length === 2 ? true : false)
  }
}
