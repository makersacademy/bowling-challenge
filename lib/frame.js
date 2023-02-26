class Frame {

  constructor() {
    this.rolls = [];
  }

  addRoll(pins) {
    this.rolls.push(pins);
  }

  score() {
    let sum = 0;
    for (let i = 0; i < this.rolls.length; i++) {
      sum += this.rolls[i];
    }
    return sum
  }

  checkSpare() {
    return this.rolls.length === 2 && this.score() === 10;
  }

  checkStrike() {
    return this.rolls.length === 1 && this.score() === 10;
  }
}

module.exports = Frame;