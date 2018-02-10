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
      this.recordScore();
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
    if (this.isAStrikeFrame) {
      throw Error('Cannot have second go after a strike');
    } else {
      this.rolls[this.bowlAttempts] = pins;
    }
  }

  recordScore() {
    this.baseScore = this.calculateScore();
    this.isASpareFrame = this.isSpare();
    this.isAStrikeFrame = this.isStrike();
  }

  calculateScore() {
    const rolls = Object.values(this.rolls);
    return rolls.reduce((a, b) => a + b);
  }

  isSpare() {
    return this.rolls[1] + this.rolls[2] === 10;
  }

  isStrike() {
    return this.rolls[1] === 10;
  }
}

module.exports = Frame;
