class Frame {
  constructor() {
    this.rolls = [];
    this.strike = false;
  }

  addRoll(pins) {
    if (this.isComplete()) {
      throw new Error('Frame is already complete');
    }
    this.rolls.push(pins);
  }

  isStrike() {
    return this.strike;
  }

  markAsStrike() {
    this.strike = true;
  }

  isSpare() {
    return this.rolls.length === 2 && this.getScore() === 10;
  }

  getScore() {
    return this.rolls.reduce((total,pins) => total + pins, 0);
  }

  isComplete() {
    return this.isStrike() || this.rolls.length === 2;
  }
}

module.exports = Frame;
