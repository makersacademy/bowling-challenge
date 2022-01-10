class Frame {
  constructor() {
    this.rolls = [];
    this.bonus = 0;
  }

  addRoll(points) {
    this.rolls.push(points);
  }

  totalScore() {
    if (Number.isNaN(this.bonus)) {
      this.bonus = 20;
    }
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    return this.rolls.reduce(reducer, 0) + this.bonus;
  }

  isSpare() {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    return this.rolls.reduce(reducer, 0) === 10 && this.rolls.length > 1;
  }

  isStrike() {
    return this.rolls[0] === 10;
  }
}

module.exports = Frame;
