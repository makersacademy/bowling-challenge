class Frame {
  constructor(rolls) {
    this.rolls = []
  }
  roll(pins) {
    this.rolls.push(pins);
  }
  isStrike() {
    return (this.rolls[0] === 10 ? true : false)
  }
}

