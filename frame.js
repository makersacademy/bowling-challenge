class Frame {
  constructor(firstRoll, secondRoll = 0, thirdRoll = 0) {
    this.firstRoll = firstRoll;
    this.secondRoll = secondRoll;
    this.thirdRoll = thirdRoll;
    this.open = false;
    this.spare = false;
    this.strike = false;
  }
  isOpen = () => {
    if (
      this.firstRoll < 10 &&
      this.secondRoll < 10 &&
      this.firstRoll + this.secondRoll < 10
    ) {
      this.open = true;
    }
  };
  isSpare = () => {
    if (this.firstRoll + this.secondRoll == 10 && this.firstRoll != 10) {
      this.spare = true;
    }
  };
  isStrike = () => {
    if (this.firstRoll == 10) {
      this.strike = true;
    }
  };
}

module.exports = Frame;
