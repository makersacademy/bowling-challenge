'use strict';

class Bowling {
  constructor() {
    this.rollScore = 0;
  }

  roll(pins) {
    this.rollScore += pins;
  }

  totalScore() {
    return this.rollScore;
  }
};