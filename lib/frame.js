const Bonus = require('./bonus');

class Frame {
  constructor() {
    this.rolls = [];
  }

  roll(score) {
    this.rolls.push(score);
    const bonus = this.#strike() || this.#spare();
    return bonus ? new Bonus(this, bonus) : null;
  }

  getScore() {
    return this.rolls.reduce((totalScore, rollScore) => totalScore + rollScore, 0);
  }

  completed() {
    return this.rolls.length === 2 || this.#strike();
  }

  #strike() {
    const strike = this.getScore() === 10 && this.rolls.length;
    return strike ? 2 : null;
  }

  #spare() {
    const spare = this.getScore() === 10 && this.rolls.length;
    return spare ? 1 : null;
  }
}

module.exports = Frame;
