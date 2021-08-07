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
    this.checkSpare();
  }

  checkStrike() {
    if (this.firstRollPins === 10) {
      this.isStrike = true;
    }
  }

  checkSpare() {
    if (this.firstRollPins + this.secondRollPins === 10) { 
      this.isSpare = true;
    }
  }
}
