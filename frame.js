class Frame {
  constructor() {
    this.rolls = [];
    this.bonus = 0;
    this.reducer = (previousValue, currentValue) => previousValue + currentValue;
  }

  addRoll(points) {
    this.rolls.push(points);
  }

  totalScore() {
    
    return this.rolls.reduce(this.reducer, 0) + this.bonus;
  }

  isSpare() {
    return this.rolls.reduce(this.reducer, 0) == 10;
  }

  isStrike() {
    return this.rolls[0] == 10;
  }
}

module.exports = Frame;