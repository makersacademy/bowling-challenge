class Frame {
  constructor(firstRoll, secondRoll, thirdRoll = null) {
    this.firstRoll = Number(firstRoll);
    this.secondRoll = Number(secondRoll) || 0;
    this.thirdRoll = thirdRoll;
    this.bonus = 0;
  }

  isStrike() {
    return this.firstRoll === 10;
  }

  isSpare() {
    return this.firstRoll + this.secondRoll === 10 && !this.isStrike();
  }

  isFinalFrame() {
    return this.thirdRoll !== null;
  }
}

module.exports = Frame;