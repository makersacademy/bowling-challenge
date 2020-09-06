'use strict'

class Frame {

  constructor() {
    this.frame = []
  }

  bowl(score) {
    this.frame.push(score);
  }

  firstBowl() {
    return this.frame[0];
  }

  secondBowl() {
    return this.frame[1];
  }

  isComplete() {
    return this.frame.length === 2;
  }
}
