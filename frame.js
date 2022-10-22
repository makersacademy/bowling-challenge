class Frame {
  constructor() {
    this.whichRoll = 0;
    this.roll1 = 0;
    this.roll2 = 0;
    this.strike = false;
    this.spare = false;
  }

  addRoll(score) {
    if (this.whichRoll === 0) {
      this.roll1 = score;
      this.whichRoll += 1;
      if (this.roll1 === 10) {
        this.strike = true;
      }
    } else {
      this.roll2 = score;
      if (this.roll1 + this.roll2 === 10) {
        this.spare = true;
      }
    }
  }

  total() {
    return this.roll1 + this.roll2;
  }
}

module.exports = Frame;

// let frame1 = new Frame();
// frame1.addRoll(4);
// frame1.addRoll(6);
// frame1.total();
