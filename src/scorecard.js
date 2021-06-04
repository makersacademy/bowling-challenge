'use strict'
class Scorecard {
  constructor () {
    this.frames = [new Frame(), new Frame(), new Frame(), new Frame(), new Frame(), new Frame(), new Frame(), new Frame(), new Frame(), new Frame()]
    this.frame = 1
    this.roll = 1
  }

  getSum (total, num) {
    return total + Math.round(num)
  }

  currentScore () {
    const arr = this.framesArray().map(frame => frame.currentScore())
    return arr.reduce(this.getSum, 0)
  }

  framesArray () {
    return this.frames
  }

  currentFrame () {
    return this.frame
  }

  currentRoll () {
    return this.roll
  }
}
