class Frame {
  constructor() {
    this.roll_1 = 0;
    this.roll_2 = 0;
    this.roll_3 = 0;
  }
  stRoll(roll) {
    this.roll_1 += roll;
  }
  ndRoll(roll) {
    this.roll_2 += roll;
  }
  rdRoll(roll) {
    this.roll_3 += roll;
  }
  getTotal() {
    return this.roll_1 + this.roll_2 + this.roll_3;
  }
}
