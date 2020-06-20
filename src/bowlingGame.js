'use strict';

class BowlingGame {
  constructor() {
    this.frame = [];
  }

    roll(pins) {
      this.frame.push(pins);
    }
}