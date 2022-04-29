class Frame {
  constructor() {
    this.scores = [];
    this.strike = false;
    this.spare = false;
  }

  rolls() {
    return this.scores.length;
  }

  addRoll(num) {
    this.scores = this.scores.concat(num);
  }

  firstRoll() {
    return this.scores[0];
  }

  secondRoll() {
    return this.scores[1];
  }

  bonusRoll() {
    return this.scores[2];
  }

  isStrike() {
    if (this.firstRoll() === 10) {
      this.strike = true;
    }
    return this.strike;
  }

  isSpare() {
    if (this.firstRoll() != 10 && this.firstRoll() + this.secondRoll() === 10) {
      this.spare = true;
    }
    return this.spare;
  }
}

module.exports = Frame;
