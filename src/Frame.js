class Frame {
  constructor(roll1, roll2 = 0) {
    this.checkRolls(roll1, roll2);
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
  checkRolls(roll1, roll2) {
    if ((roll1 || roll2) > 10 || (roll1 || roll2) < 0 ||
    isNaN(roll1 || roll2)) {
      throw new Error('Must roll a number between 0 and 10');
    } else if (roll1 + roll2 > 10) {
      throw new Error('Cannot knock down more than 10 pins.');
    }
  }
};
