class Frame {
  constructor() {
    // eventually separate frame score?
    // i.e. base score vs bonus score
    this.score = 0;
    this.scoreThrow1 = 0;
    this.scoreThrow2 = 0;
    this.scoreThrow3 = 0;
    this.spare = false;
    this.strike = false;
  }

  setBonus() {
    if (this.scoreThrow1 === 10) {
      this.strike = true;
    } else if (this.scoreThrow1 + this.scoreThrow2 === 10) {
      this.spare = true;
    }
  }
};

module.exports = Frame;
