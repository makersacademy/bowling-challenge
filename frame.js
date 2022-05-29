class Frame {
  constructor() {
    this.pins = 10;
    this.score = 0;
    this.roll = 1;
    this.bonusScore = 0;
    this.bonusCount = 0;
    this.complete = false;
  }

  countRoll(pinsKnocked) {
    this.pins -= pinsKnocked;
    //checkPins()
    if (this.roll === 1) {
      this.roll = 2;
    } else {
      this.complete = true;
    }
  }

  calculateScore() {
    if (this.bonusCount > 0) {
      this.score = 0;
    } else {
      this.score = (10 - this.pins) + this.bonusScore;
    }
  }
}

module.exports = Frame