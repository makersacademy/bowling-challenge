const Bonus = require('./bonus');

class Frame {
  constructor() {
    this.rolls = [];
  }

  roll(score) {
    this.rolls.push(score);
    if (this.#strike()) {
      return new Bonus(2);
    }
    if (this.#spare()) {
      return new Bonus(1);
    }
    return null;
  }

  getScore() {
    return this.rolls.reduce((totalScore, rollScore) => totalScore + rollScore, 0);
  }

  completed() {
    return this.rolls.length === 2 || this.#strike();
  }

  #strike() {
    return this.getScore() === 10 && this.rolls.length === 1;
  }

  #spare() {
    return this.getScore() === 10 && this.rolls.length === 2;
  }
}

module.exports = Frame;
