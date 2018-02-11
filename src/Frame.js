class Frame {
  constructor(rulesObject) {
    this.rules = rulesObject;
    this.bowlAttempts = 0;
    this.rolls = {};
  }

  bowl(pins) {
    try {
      this.recordTurn();
      this.recordRoll(pins);
      this.recordScore();
    } catch (error) {
      throw error;
    }
  }

  // Start of helper methods

  recordTurn() {
    if (this.exceedsTurns()) {
      throw Error(`Cannot have more than ${this.rules.maxFrameLength()} rolls`);
    } else {
      this.bowlAttempts += 1;
    }
  }

  exceedsTurns() {
    return this.bowlAttempts >= this.rules.maxFrameLength();
  }

  recordRoll(pins) {
    if (this.isAStrikeFrame) {
      throw Error('Cannot have second go after a strike');
    } else {
      this.rolls[this.bowlAttempts] = pins;
    }
  }

  recordScore() {
    this.baseScore = this.calculateScore();
    this.isASpareFrame = this.rules.isSpare(this.rolls);
    this.isAStrikeFrame = this.rules.isStrike(this.rolls);
  }

  calculateScore() {
    const rolls = Object.values(this.rolls);
    return rolls.reduce((a, b) => a + b);
  }

  roll(number) {
    return this.rolls[number];
  }
}

module.exports = Frame;
