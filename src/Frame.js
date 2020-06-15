class Frame {
  constructor() {
    this.roll1 = null
    this.roll2 = null
    this.strikeBonus = null;
    this.spareBonus = null;
  }
  isComplete() {
    return this.isStrike() || this.roll1 != null && this.roll2 != null
  }
  isStrike() {
    return this.roll1 === 10
  }
  isSpare() {
    return this.isStrike() ? false : this.roll1 + this.roll2 === 10
  }
  total() {
    return this.roll1 + this.roll2 + this.spareBonus + this.strikeBonus
  }
}


