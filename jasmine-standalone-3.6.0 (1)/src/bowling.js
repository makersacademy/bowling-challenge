'use strict'

class Bowling {
  constructor() {
    this.tally = 0;
  }

  roll(pins) {
    this.tally += pins;
  }


  score() {
    return this.tally
    }

}
