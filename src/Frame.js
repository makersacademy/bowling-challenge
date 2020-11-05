class Frame {
  constructor() {
    this.rolls = []
  }

  roll(n) {
    this.rolls.push(n)
  }

  pins() {
    return this.rolls.reduce((a, b) => a + b, 0)
  }

  isStrike() {
    return this.rolls[0] == 10
  }
}