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
}

module.exports = Frame;