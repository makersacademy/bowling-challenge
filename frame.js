const { reduce } = require("lodash");

class Frame {
  constructor(number) {
    this.maxRolls = 2;
    this.totalPins = 10;
    this.number = number;
    this.scores = [];
    this.bonuses = [];
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
      this.getBonus() // Initial accumulator
    );
  }

  getDetailedScore() {
    return {
      first: this.scores.first || 0,
      second: this.scores[1] || 0,
      bonus: this.getBonus(),
      total: this.getScore(),
    };
  }

  getBonus() {
    return reduce(
      this.bonuses,
      (accumulator, pins) => {
        return accumulator + pins;
      },
      0 // Initial accumulator
    );
  }

  addScore(pins_hit) {
    if (!this.isComplete()) {
      this.scores.push(pins_hit);
    }
  }

  addBonus(pins_hit) {
    if (!this.isBonusComplete()) {
      this.bonuses.push(pins_hit);
    }
  }

  isComplete() {
    if (this.isStrike()) return true;
    return this.scores.length === this.maxRolls;
  }

  isStrike() {
    return this.scores[0] === this.totalPins;
  }

  isSpare() {
    return this.scores[0] + this.scores[1] === this.totalPins;
  }

  isBonusComplete() {
    if (this.isSpare() && this.bonuses.length < 1) {
      return false;
    } else if (this.isStrike() && this.bonuses.length < 2) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Frame;
