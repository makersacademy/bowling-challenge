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
  isSpare() {
    return (this.rolls.length == 2 && this.rolls[0] + this.rolls[1] === 10 ? true : false)
  }
  count() {
    return (this.rolls.length > 1 ? this.rolls[0] + this.rolls[1] : this.rolls[0])
  }
}

