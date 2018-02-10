class Frame {
  constructor() {
    this.bowlAttempts = 0;
    this.rolls = { 1: null, 2: null };
  }

  bowl(pins) {
    this.bowlAttempts += 1;
    this.rolls[this.bowlAttempts] = pins;
  }
}

module.exports = Frame;
