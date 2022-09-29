class Frame {
  constructor(number) {
    this.number = number;
    this.rollOne = 0;
    this.rollTwo = 0;
    this.bonus = 0;
    this.strike = false;
    this.spare = false;
  }

  getRollOne() {
    return this.rollOne;
  }

  getRollTwo() {
    return this.rollTwo;
  }

  setRollOne(score) {
    this.rollOne = score;
    if (this.rollOne == 10) this.strike = true;
  }

  setRollTwo(score) {
    this.rollTwo = score;
    if (this.rollOne + this.rollTwo == 10) this.spare = true;
  }

  isStrike() {
    return this.strike;
  }

  isSpare() {
    return this.spare;
  }

  addBonus(score) {
    this.bonus += score;
  }

  getTotalScore() {
    const total = this.rollOne + this.rollTwo + this.bonus;
    return total;
  }

  getNumber() {
    return this.number;
  }
}

module.exports = Frame;
