class Frame {
  constructor(roll1, roll2 = 0) {
    if (roll1 > 10 || roll1 < 0) {
      throw new Error('Must score between 0 and 10');
    }
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
    if (this.roll1 + this.roll2 == 10) {
      return false;
    }
    return true;
  }
  isSpare() {
    if (this.roll1 != 10 && this.roll1 + this.roll2 == 10) {
      return true;
    }
    return false;
  }
  legit() {
    throw new Error('Cannot score greater than 10asf');
  }
};
