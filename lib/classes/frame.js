class Frame {
  constructor(firstRoll, secondRoll, thirdRoll) {
    this.firstRoll = Number(firstRoll) || 0;
    this.secondRoll = Number(secondRoll) || 0;
    this.thirdRoll = Number(thirdRoll) || 0;
    this.bonus = 0;
  }

  isStrike() {
    return this.firstRoll === 10;
  }

  isSpare() {
    return this.firstRoll + this.secondRoll === 10 && !this.isStrike();
  }

  isFinalFrame() {
    return this.thirdRoll !== 0;
  }
}

module.exports = Frame;