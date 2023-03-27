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

  returnFirstRoll() {
    return this.rolls[0];
  }

  getSpareBonus(frameIndex) {
    let bonus = 0
    const nextFrame = this.frame[frameIndex + 1];
    if (nextFrame) {
      bonus += nextFrame.getFirstRoll();
    }
    return bonus;
  }
}

module.exports = Frame;
