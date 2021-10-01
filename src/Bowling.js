'use strict';

class Bowling {
  constructor() {
    this.runningScore = 0;
  }

  score() {
    return this.runningScore;
  }

  roll(pins) {
    this.runningScore += pins;
  }
}
