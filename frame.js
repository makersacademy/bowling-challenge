class Frame {
  constructor (roll_1, roll_2) {
    this.roll_1 = roll_1;
    this.roll_2 = roll_2;
  };

  getSum() {
    return this.roll_1 + this.roll_2
  };

  isSpare() {
    return this.roll_1 !== 10 && this.getSum() === 10;
  };

  isStrike() {
    return this.roll_1 === 10;
  };
};

module.exports = Frame;