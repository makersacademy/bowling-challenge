class Frame {
  constructor() {
    this.roll_1 = 0;
    this.roll_2 = 0;
    this.total = 0;
  }
  stRoll(roll) {
    this.roll_1 += roll;
  }
  ndRoll(roll) {
    this.roll_2 += roll;
  }
  getRolls() {
    this.total += this.roll_1 + this.roll_2;
    return this.total;
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
    if (this.getRolls() === 10 && this.roll_2 != 0) {
      return true;
    } else {
      return false;
    }
  }
  addPoints(num) {
    this.total += num;
  }
}
