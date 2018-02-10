class Frame {
  constructor() {
    this.maxFrameLength = 2;
    this.bowlAttempts = 0;
    this.rolls = {};
  }

  bowl(pins) {
    try {
      this.recordTurn();
      this.recordRoll(pins);
      this.recordSpecial();
    } catch (error) {
      throw error;
    }
  }

  // Start of helper methods

  recordTurn() {
    if (this.exceedsTurns()) {
      throw Error(`Cannot have more than ${this.maxFrameLength}`);
    } else {
      this.bowlAttempts += 1;
    }
  }

  exceedsTurns() {
    return this.bowlAttempts >= this.maxFrameLength;
  }

  recordRoll(pins) {
    this.rolls[this.bowlAttempts] = pins;
  }

  recordSpecial() {
    if (this.spare()) {
      this.wasSpare = true;
    } else if (this.strike()) {
      this.wasStrike = true;
    }
  }

  spare() {
    return this.rolls[1] + this.rolls[2] === 10;
  }

  strike() {
    return this.rolls[1] === 10;
  }
}

module.exports = Frame;
