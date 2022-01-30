class Frame {
  constructor() {
    this.score = 0;
  }

  addRoll(knockedPins) {
    this.roll1 ? (this.roll2 = knockedPins) : (this.roll1 = knockedPins);
  }

  isStrike() {
    return this.roll1 === 10;
  }

  isSpare() {
    return this.isStrike() ? false : this.roll1 + this.roll2 === 10;
  }

  isComplete() {
    return this.roll2 != undefined || this.isStrike()
  }
}

module.exports = Frame;
