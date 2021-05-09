// eslint-disable-next-line no-unused-vars
class Frame {
  constructor() {
    this.TOTAL_PINS = 10;
    this.STRIKE_BONUS = 2;
    this.SPARE_BONUS = 1;
    this.bonusCount = 0;
    this.bonus = 0;
    this.rolls = [];
    this.isFinal = false;
  }

  addRoll(roll) {
    this.rolls.push(roll);
    if (this.isFinal) { return; }
    if (this._isStrike()) {
      this.bonusCount += this.STRIKE_BONUS;
    } else if (this._isSpare()) {
      this.bonusCount += this.SPARE_BONUS;
    }
  }

  score() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (this.rolls.length === 0) { return this.bonus; }
    return this.rolls.reduce(reducer) + this.bonus;
  }

  makeFinal() {
    this.isFinal = true;
  }

  addBonus(bonus) {
    if (this.bonusCount === 0) { return; }
    this.bonusCount -= this.SPARE_BONUS;
    this.bonus += bonus;
  }

  isOver() {
    if (!this.isFinal) { return this._isStrike() || this.rolls.length >= 2; }
    return this.rolls.length >= 3 || this._isTwoRollFinalFrame();
  }

  _isTwoRollFinalFrame() {
    return this.rolls.length >= 2 && this.score() < this.TOTAL_PINS;
  }

  _isStrike() {
    return this.rolls[0] === this.TOTAL_PINS;
  }

  _isSpare() {
    const pins = this.rolls[0] + this.rolls[1];
    return pins === this.TOTAL_PINS && !this._isStrike();
  }
}
