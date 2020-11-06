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

  setNumber(n) {
    this.number = n
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

  isComplete() {
    if (this.number == 10 && this.pins() == 10) {
      return this.rolls.length + this.bonusRolls.length == 3
    } else {
      return this.rolls.length == 2 || this.isStrike()
    }
  }

  score(nextFrame1 = null, nextFrame2 = null) {
    return this.pins() + this.bonus(nextFrame1, nextFrame2)
  }

  bonus(nextFrame1 = null, nextFrame2 = null) {
    if (this.isStrike()) {
      return this.nextRoll1(nextFrame1) + this.nextRoll2(nextFrame1, nextFrame2)
    } else if (this.isSpare()) {
      return this.nextRoll1(nextFrame1)
    } else {
      return 0
    }
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