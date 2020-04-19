class Frame {
  constructor() {
    this.roll1;
    this.roll2;
  }
  setValues(roll1, roll2 = 0) {
    this.roll1 = roll1;
    this.roll2 = roll2;
  }
  isStrike() {
    if (this.roll1 != 10) {
      return false;
    }
    return true;
  }
  isOpenFrame() {
    console.log(this.roll1)
    if ((this.roll1 + this.roll2) == 10) {
      return false;
    }
    return true;
  }
};
