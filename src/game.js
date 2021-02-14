"use-strict";

class Game {
  constructor() {
    this.rolls = [];
    this.rollIndex = 0;
    this.points = 0;
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
    for (let i = 1; i < 11; i++) {
      // where i is the frame number
      this.points += this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1];
      this.rollIndex += 2;
    }
    return this.points;
  }
}
