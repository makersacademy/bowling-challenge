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
      if (this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1] === 10) {
        // if the frame is a spare add bonus points equal to the number of pins knocked on the next roll
        this.points +=
          this.rolls[this.rollIndex] +
          this.rolls[this.rollIndex + 1] +
          this.rolls[this.rollIndex + 2];
        this.rollIndex += 2;
      } else {
        this.points +=
          this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1];
        this.rollIndex += 2;
      }
    }
    return this.points;
  }
}
