const { reduce } = require("lodash");

class Frame {
  constructor(number) {
    this.MAX_ROLLS = 2;
    this.TOTAL_PINS = 10;
    this.number = number;
    this.scores = [];
  }

  getNumber() {
    return this.number;
  }

  getScore() {
    return reduce(
      this.scores,
      (accumulator, pins) => {
        return accumulator + pins;
      },
      0 // Initial accumulator
    );
  }

  addScore(pins_hit) {
    this.scores.push(pins_hit);
  }

  isComplete() {
    if (this.isStrike()) return true;
    return this.scores.length === this.MAX_ROLLS;
  }

  isStrike() {
    return this.scores[0] === this.TOTAL_PINS;
  }

  isSpare() {
    return this.scores[0] + this.scores[1] === this.TOTAL_PINS;
  }
}

module.exports = Frame;
