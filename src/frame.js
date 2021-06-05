class Frame {
  constructor() {
    this.total = 0;
    this.rolls = 0;
  }

  roll = (pinsKnocked) => {
    this.total += pinsKnocked;
    this.rolls++;
  };

  isStrike = () => {
    return this.total == 10 && this.rolls == 1;
  };

  isSpare = () => {
    return this.total == 10 && this.rolls == 2;
  };
}
