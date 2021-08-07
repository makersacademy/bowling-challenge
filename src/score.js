class Score {
  constructor() {
    this.firstRollPins = null;
    this.secondRollPins = null;
    this.isStrike = false;
    this.isSpare = false;
    this.score = null;
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
    if (this.firstRollPins + this.secondRollPins === 10 && this.isStrike === false) {
      this.isSpare = true;
    }
  }

  calculateScore() {
    if (this.isStrike === true || this.isSpare === true) {
      return 0;
    }
    return (this.firstRollPins + this.secondRollPins);
  }
}
