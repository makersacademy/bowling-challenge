'use strict';

class Frame {

  constructor() {
    this.frame = []
    this.frameTotal = 0
  }

  add(roll1, roll2) {
    this.frame.push(roll1, roll2)
    this.frameTotal += (roll1 + roll2)
  }

  getFirstRoll() {
    return this.frame[0]
  }

  getSecondRoll() {
    return this.frame[1]
  }
}
