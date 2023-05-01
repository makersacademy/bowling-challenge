class Frame {
  constructor(firstRoll, secondRoll) {
    this.firstRoll = firstRoll;
    this.secondRoll = secondRoll;
    this.bonus = 0;
  }

  isStrike() {
    return this.firstRoll === 10;
  }

  isSpare() {
    return this.firstRoll + this.secondRoll === 10 && !this.isStrike();
  }
}

module.exports = Frame;