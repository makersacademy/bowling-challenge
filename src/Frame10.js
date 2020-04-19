class Frame10 {
  constructor() {
    this.roll1 = null;
    this.roll2 = null;
    this.roll3 = null;
    this.strikeBonus = null;
    this.spareBonus = null;
  }
  isComplete() {
    return false
  }
  isStrike() {
    return this.roll1 === 10;
  }
  isSpare() {
    return this.isStrike() ? false : this.roll1 + this.roll2 === 10;
  }
  total() {
    return this.roll1 + this.roll2 + this.roll3 + this.spareBonus + this.strikeBonus;
  }
}
