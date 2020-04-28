class Frame {
  constructor(roll1, roll2 = 0) {
    this.checkRolls(roll1, roll2);
    this.roll1 = roll1;
    this.roll2 = roll2;
    this.ALL_PINS = 10;
  }
  isStrike() {
    if (this.roll1 != this.ALL_PINS) {
      return false;
    }
    return true;
  }
  isOpenFrame() {
    if (this.roll1 + this.roll2 == this.ALL_PINS) {
      return false;
    }
    return true;
  }
  isSpare() {
    if (this.roll1 != this.ALL_PINS && this.roll1 + this.roll2 == this.ALL_PINS) {
      return true;
    }
    return false;
  }
  checkRolls(roll1, roll2) {
    if ((roll1 || roll2) > 10) {
      throw new Error('Must roll a number between 0 and 10');
    }
    if ((roll1 || roll2) < 0) {
      throw new Error('Must roll a number between 0 and 10');
    }
    if (isNaN(roll1 || roll2)) {
      throw new Error('Must roll a number between 0 and 10');
    }
    if (roll1 + roll2 > 10) {
      throw new Error('Cannot knock down more than 10 pins.');
    }
  }
};
