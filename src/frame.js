'use strict'

class Frame {

  constructor() {
    this.firstBowl = '-'
  }

  bowl(score) {
    this.firstBowl = score;
  }

  firstBowl() {
    return this._firstBowl;
  }
}
