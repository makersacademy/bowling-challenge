class Frame {
  constructor() {
    this.firstRoll = 0;
    this.secondRoll = 0;
    this.spare = false;
    this.strike = false;
  }

  setFirstRoll(firstRoll) {
    this.firstRoll = firstRoll;
    if (firstRoll === 10) {
      this.spare = true;
    }
  }

  getFirstRoll() {
    return this.firstRoll;
  }

  setSecondRoll(secondRoll) {
    this.secondRoll = secondRoll;
    if (this.firstRoll + secondRoll === 10) {
      this.spare = true;
    }
  }

  getSecondRoll() {
    return this.secondRoll;
  }

  isStrike() {
    return this.firstRoll === 10;
  }

  isSpare() {
    return this.spare === true;
  }
}

module.exports = Frame;
