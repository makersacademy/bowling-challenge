"use strict";
const TOTAL_PINS = 10
class Frame {
  constructor() {
    this.rolls = [];
    this.score = 0;
  };

  getRolls() {
    return this.rolls;
  };

  addRoll(pins) {
    this.rolls.push(pins);
    this.score += pins
  };

  getScore() {
    return this.score;
  };

  isStrike() {
    return this.getRolls()[0] === TOTAL_PINS;
  };

  isSpare() {
    return this.getRolls()[0] + this.getRolls()[1] === TOTAL_PINS;
  }
};
