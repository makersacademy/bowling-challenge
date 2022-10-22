class Frame {
  constructor() {
    this.rolls = [];
    this.completed = false;
  }

  roll(numberOfPins) {
    this.rolls.push(numberOfPins);

    if (this.isStrike() || this.isSpare() || this.isComplete()) {
      this.completed = true;
    }
  }

  isStrike() {
    const strike = (roll) => roll === 10;
    return this.rolls.some(strike);
  }

  isSpare() {
    return this.total() === 10 && !this.isStrike();
  }

  isComplete() {
    return this.rolls.length === 2;
  }

  total() {
    return this.rolls.reduce((sum, current) => sum + current, 0);
  }
}

module.exports = Frame;
