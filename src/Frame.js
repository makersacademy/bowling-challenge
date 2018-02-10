class Frame {
  constructor() {
    this.maxFrameLength = 2;
    this.bowlAttempts = 0;
    this.rolls = {};
  }

  bowl(pins) {
    if (this.cannotBowl()) {
      throw Error(`Cannot have more than ${this.maxFrameLength}`);
    } else {
      this.recordTurn();
      this.recordRoll(pins);
    }
  }

  // Start of helper methods

  cannotBowl() {
    return this.bowlAttempts >= this.maxFrameLength;
  }

  recordTurn() {
    this.bowlAttempts += 1;
  }

  recordRoll(pins) {
    this.rolls[this.bowlAttempts] = pins;
  }
}

module.exports = Frame;
