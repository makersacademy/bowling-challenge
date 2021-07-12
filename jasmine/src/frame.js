class Frame {
  constructor() {
    this.roll_1 = 0;
    this.roll_2 = 0;
    this.total = 0;
  }
  stRoll(roll) {
    this.roll_1 += roll;
    this.total += roll;
  }
  ndRoll(roll) {
    this.roll_2 += roll;
    this.total += roll;
  }

  getTotal() {
    return this.total;
  }
  isStrike() {
    if (this.roll_1 === 10) {
      return true;
    } else {
      return false;
    }
  }
  isSpare() {
    if (this.roll_1 + this.roll_2 === 10 && this.roll_2 != 0) {
      return true;
    } else {
      return false;
    }
  }
  addPoints(num) {
    this.total += num;
  }
}
