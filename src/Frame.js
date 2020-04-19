class Frame {
  constructor() {
    this.roll1;
    this.roll2;
  }
  setValues(roll1, roll2) {
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
    return true;
  }
};
