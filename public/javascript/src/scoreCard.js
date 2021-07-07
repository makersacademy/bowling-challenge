'use strict';

class Scorecard {

  constructor() {
    this.scores = []
    this.frame = 1
    this.total = 0
    this.spare = false
    this.strike = false
  }

  getCurrentTotal() {
    return this.total
  }

  add(frame) {
    this.scores.push(frame.frame)
    this.frame += 1

    if (frame.frame[0] === 10) {
      this.strike = true
      this.total += 10
    } else if (this.strike === true) {
      this.strike = false
      this.total += (2 * frame.frameTotal)
    } else if (frame.frameTotal === 10) {
      this.spare = true
      this.total += 10
    } else if (this.spare === true) {
      this.spare = false
      this.total += (frame.frameTotal + frame.frame[0])
    } else {
      this.total += (frame.frameTotal)
    }
  }
}
