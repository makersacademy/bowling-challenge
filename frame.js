class Frame {
  constructor() {
    this.rolls = [];
  }

  addRoll(points) {
    this.rolls.push(points);
  }

  totalScore() {
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    return this.rolls.reduce(reducer, 0);
  }
}

module.exports = Frame;