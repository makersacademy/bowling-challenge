const Bonus = require('./bonus');

class Frame {
  constructor() {
    this.rolls = [];
  }

  addScore(score) {
    this.rolls.push(score);
    return this.#bonus();
  }

  getScore() {
    return this.rolls.reduce((totalScore, rollScore) => totalScore + rollScore, 0);
  }

  isComplete() {
    return this.#isRollNumber(2) || this.#isStrike();
  }

  #bonus() {
    const bonus = this.#isStrike() || this.#isSpare();
    if (bonus) return new Bonus(this, bonus);
  }

  #isStrike() {
    if (this.#hasNoPinsLeft() && this.#isRollNumber(1)) return 2;
  }

  #isSpare() {
    if (this.#hasNoPinsLeft() && this.#isRollNumber(2)) return 1;
  }

  #hasNoPinsLeft() {
    return this.getScore() === 10;
  }

  #isRollNumber(number) {
    return this.rolls.length === number;
  }
}

module.exports = Frame;
