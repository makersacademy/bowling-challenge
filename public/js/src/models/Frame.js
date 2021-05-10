const TOTAL_PINS = 10
const STRIKE_BONUS = 2
const SPARE_BONUS = 1

class Frame {
  constructor () {
    this.bonusCount = 0
    this.bonus = 0
    this.rolls = []
    this.isFinal = false
  }

  addRoll (roll) {
    this.rolls.push(roll)
    if (this.isFinal) { return }
    if (this._isStrike()) { this.bonusCount += STRIKE_BONUS }
    if (this._isSpare()) { this.bonusCount += SPARE_BONUS }
  }

  score () {
    if (this.rolls.length === 0) { return this.bonus }
    return this.rolls.reduce((sum, roll) => sum + roll) + this.bonus
  }

  makeFinal () {
    this.isFinal = true
  }

  addBonus (bonus) {
    if (this.bonusCount === 0) { return }
    this.bonusCount -= SPARE_BONUS
    this.bonus += bonus
  }

  isOver () {
    if (!this.isFinal) { return this._isStrike() || this.rolls.length >= 2 }
    return this.rolls.length >= 3 || this._isTwoRollFinalFrame()
  }

  _isTwoRollFinalFrame () {
    return this.rolls.length >= 2 && this.score() < TOTAL_PINS
  }

  _isStrike () {
    return this.rolls[0] === TOTAL_PINS
  }

  _isSpare () {
    return this.rolls[0] + this.rolls[1] === TOTAL_PINS && !this._isStrike()
  }
}
