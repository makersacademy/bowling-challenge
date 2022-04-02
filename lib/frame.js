class Frame {
  constructor() {
    this.roll1 = null;
    this.roll2 = null;
    this.roll3 = null;
    this.tenthFrame = false;
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

  tenthFrame() {
    return this.tenthFrame;
  }

  addRoll(roll) {
    if (roll > 10) {
      throw "Maximum score of 10 allowed";
    }

    if (this.roll1 === null) {
      this.roll1 = roll;
    } else if (this.roll2 === null) {
      if (this.roll1 + roll > 10 && this.tenthFrame === false) {
        throw "Maximum score of 10 allowed";
      } else {
        this.roll2 = roll;
      }
    } else {
      if (this.tenthFrame === false) {
        throw "More than 2 rolls not allowed";
      } else {
        this.roll3 = roll;
      }
    }
  }
}

module.exports = Frame;
