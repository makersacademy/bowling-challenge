class Frame {
  constructor(rolls) {
    this.rolls = []
  }
  roll(pins) {
    this.rolls.push(pins);
  }
  isStrike() {
    return true
  }
}

