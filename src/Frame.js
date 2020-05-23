class Frame {
  constructor() {
    this.firstRoll = null;
    this.secondRoll = null;
    this.thirdRoll = null;
    this.index = 0;
  }
  roll(number) {
    if (!this.firstRoll) {
      this.firstRoll = number;
    } else if (!this.secondRoll) {
      this.secondRoll = number;
    } else {
      this.thirdRoll = number;
    }
  }
  calculatePins() {
    return this.firstRoll + this.secondRoll + this.thirdRoll;
  }
  hasSpare() {
    if (this.firstRoll + this.secondRoll == 10) {
      return true;
    }
  }
  hasStrike() {
    if (this.firstRoll == 10) {
      return true;
    }
  }
}
