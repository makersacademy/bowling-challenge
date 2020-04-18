class Frame {
  constructor() {
    this.spareBonus = 0;
    this.roll1 = 0
    this.roll2 = 0
  }
  isStrike() {
    return this.roll1 === 10
  }
  isSpare() {
    return this.isStrike() ? false : this.total() === 10
  }
  total() {
    return this.roll1 + this.roll2 + this.spareBonus
  }
}
