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

  frameComplete(index) {
    if (index < 9) {
    return (this.checkStrike() || this.rolls.length === 2);
  } else { 
    if (this.rolls.length < 2) {
      return false;
    } else {
      if (this.rolls[0] === 10 || this.rolls[0] + this.rolls[1] === 10) {
        return this.rolls.length === 3;
      } else {
        return this.rolls.length === 2;
      }
    }
  }}
}

module.exports = Frame;