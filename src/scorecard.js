'use strict'
class Scorecard {
  constructor () {
    this.frames = [new Frame(), new Frame(), new Frame(), new Frame(), new Frame(), new Frame(), new Frame(), new Frame(), new Frame(), new Frame()]
  }

  getSum (total, num) {
    return total + Math.round(num)
  }

  currentScore () {
    const arr = this.framesArray().map(frame => frame.currentScore())
    console.log(arr)
    return arr.reduce(this.getSum, 0)
  }

  framesArray () {
    return this.frames
  }
}
