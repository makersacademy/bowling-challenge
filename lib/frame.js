class Frame {
  constructor (roll1, roll2) {
    this.roll1 = roll1;
    this.roll2 = roll2;
    this.bonus = 0;
  };

  setBonus(bonus) {
    this.bonus = bonus;
  };

  getBonus() {
    return this.bonus;
  };

  isStrike () {
    return this.roll1 === 10;
  };

  isSpare () {
    return !this.isStrike() && (this.roll1 + this.roll2 === 10);
  };

  sum () {
    return this.roll1 + this.roll2 + this.bonus;
  };
};

module.exports = Frame;
