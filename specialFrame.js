class SpecialFrame {
  constructor() {
    this.pins = 10;
    this.score = 0;
    this.roll = 1;
    this.bonusScore = 0;
    this.complete = false;
  }

  countRoll(pinsKnocked) {
    this.pins -= pinsKnocked;
    this.checkPins();
    if (this.roll === 1) {
      this.roll = 2;
    } else if (this.roll === 2) {
      this.calculateScore();
      if (this.score < 10) {
        this.complete = true;
      } else {
        this.roll = 3;
      }
    } else {
      this.complete = true;
    }
  }

  checkPins() {
    if (this.pins === 0) {
      this.pins = 10;
      this.bonusScore += 10;
    }
  }

  calculateScore() {
    this.score = (10 - this.pins) + this.bonusScore;
  }
}

module.exports = SpecialFrame;
