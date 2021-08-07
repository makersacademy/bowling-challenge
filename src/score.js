class Score {
  constructor() {
    this.firstRollPins = null;
    this.secondRollPins = null;
    this.isStrike = false;
    this.isSpare = false;
  }

  firstRoll(pins) {
    this.firstRollPins = pins;
    this.checkStrike();
  }

  secondRoll(pins) {
    this.secondRollPins = pins;
  }

  checkStrike() {
    if (this.firstRollPins === 10) {
      this.isStrike = true;
    }
  }
}
