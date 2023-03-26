class Frame {
  constructor() {
    this.framescore = 0;
    this.roll1 = 0;
    this.roll2 = 0;
    this.rollnumber = 1;
    this.spare = false;
    this.strike = false;
  }

  roll(pins) {
    if (pins === 10) {
      this.strike = true;
    } else if (this.rollnumber === 2) {
      this.framescore += pins;
      this.roll2 += pins;
      if (this.framescore === 10) {
        this.spare = true;
        this.framescore = 0;
      }
    } else {
      this.framescore += pins;
      this.roll1 += pins;
      this.rollnumber += 1;
    }
  }

  frameScore() {
    return this.framescore;
  }

  isStrike() {
    return this.strike;
  }

  isSpare() {
    return this.spare;
  }
}

module.exports = Frame;
