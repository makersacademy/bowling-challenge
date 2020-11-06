class Frame {
  constructor(rolls = [], number = null) {
    this.rolls = rolls
    this.bonusRolls = []
    this.number = number
  }

  getRoll(n) {
    return this.rolls[n]
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

  isSpare() {
    return this.pins() == 10 && !this.isStrike()
  }

  nextRoll1(nextFrame1 = null) {
    if (this.number == 10) {
      return this.bonusRolls[0]
    } else if (nextFrame1 == null) {
      return 0
    } else {
      return nextFrame1.getRoll(0)
    }
  }
}