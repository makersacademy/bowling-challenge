class Frame {
  constructor(rolls = [], number = null) {
    this.rolls = rolls
    this.bonusRolls = []
    this.number = number
  }

  getRoll(n) {
    if (this.rolls[n] == null) {
      return 0
    } else {
      return this.rolls[n]
    }
  }

  getBonusRoll(n) {
    if (this.bonusRolls[n] == null) {
      return 0
    } else {
      return this.bonusRolls[n]
    }
  }

  roll(n) {
    if (this.rolls.length < 2 && !this.isStrike()) {
      this.rolls.push(n)
    } else {
      this.bonusRolls.push(n)
    }
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

  nextRoll2(nextFrame1 = new Frame([0, 0]), nextFrame2 = new Frame([0, 0])) {
    if (nextFrame1.isStrike()) {
      return nextFrame1.nextRoll1(nextFrame2)
    } else if (this.number == 10) {
      return this.getBonusRoll(1)
    } else {
      return nextFrame1.getRoll(1)
    }
  }
}