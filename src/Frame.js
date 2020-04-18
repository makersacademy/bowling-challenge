class Frame {
  constructor() {
    this.spareBonus = 0;
    this.roll1 = 0
    this.roll2 = 0
  }
  isStrike() {
    return true
  }
  isSpare() {
    return this.total() === 10
  }
  total() {
    return this.roll1 + this.roll2 + this.spareBonus
  }
}
