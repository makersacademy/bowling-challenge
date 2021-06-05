"use strict";

class Frame {
  constructor() {
    this.rolls = [];
    this.score = this.currentScore();
  }

  rollArray() {
    return this.rolls;
  }

  currentScore() {
    return this.rollArray().reduce((a, b) => a + b, 0);
  }

  updateRollScore(pins) {
    this.rolls.push(pins);
  }
}
