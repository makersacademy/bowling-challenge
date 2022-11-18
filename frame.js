class Frame {
  constructor() {
    this.roll1 = null;
    this.roll2 = null;
    this.roll3 = null;
  }

  getRoll1() {
    return this.roll1;
  }

  getRoll2() {
    return this.roll2;
  }

  getRoll3() {
    return this.roll3;
  }

  setRoll1(score) {
    this.roll1 = score;
  }

  setRoll2(score) {
    this.roll2 = score;
  }

  setRoll3(score) {
    this.roll3 = score;
  }
}

module.exports = Frame;
