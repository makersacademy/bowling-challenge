class Frame {
  constructor() {
    this.maxFrameLength = 2;
    this.bowlAttempts = 0;
    this.rolls = {};
  }

  bowl(pins) {
    if (this.bowlAttempts >= this.maxFrameLength) {
      throw Error(`Cannot have more than ${this.maxFrameLength}`);
    } else {
      this.bowlAttempts += 1;
      this.rolls[this.bowlAttempts] = pins;
    }
  }
}

module.exports = Frame;
