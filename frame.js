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
    if ((this.pins - pinsKnocked) >= 0) {
      this.pins -= pinsKnocked;
      this.checkPins();
      if (this.roll === 1) {
        this.roll = 2;
      } else {
        this.complete = true;
      }
    }
  }

  calculateScore() {
    if (this.bonusCount > 0) {
      this.score = 0;
    } else {
      this.score = (10 - this.pins) + this.bonusScore;
    }
  }

  checkPins() {
    if (this.pins === 0) {
      if (this.roll === 1) {
        this.bonusCount = 2;
        this.complete = true;
      } else {
        this.bonusCount = 1;
      }
    }
  }

  addBonusScore(pinsKnocked) {
    if (this.bonusCount > 0) {
      this.bonusScore += pinsKnocked;
      this.bonusCount -= 1;
    }
  }
}

module.exports = Frame;
