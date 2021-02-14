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

      // if (this.isStrike()) {
      //   this.addStrikePointsToFrame();
      //   this.rollIndex += 1;
      // } else if (this.isSpare()) {
      //   this.addSparePointsToFrame();
      //   this.rollIndex += 2;
      // } else {
      //   this.addPointsToFrame();
      //   this.rollIndex += 2;
      // }

      // Using a Switch statament

      switch (typeof this.rolls[this.rollIndex] === 'number') {
        case this.isStrike():
          this.addStrikePointsToFrame();
          this.rollIndex += 1;
          break;
        case this.isSpare():
          this.addSparePointsToFrame();
          this.rollIndex += 2;
          break;
        default:
          this.addPointsToFrame();
          this.rollIndex += 2
      }
    }
    return this.points;
  }

  isStrike() {
    return this.rolls[this.rollIndex] === 10;
  }

  addStrikePointsToFrame() {
    this.points +=
      this.rolls[this.rollIndex] +
      this.rolls[this.rollIndex + 1] +
      this.rolls[this.rollIndex + 2];
  }

  isSpare() {
    return this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1] === 10;
  }

  addSparePointsToFrame() {
    this.points +=
      this.rolls[this.rollIndex] +
      this.rolls[this.rollIndex + 1] +
      this.rolls[this.rollIndex + 2];
  }

  addPointsToFrame() {
    this.points += this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1];
  }
}
