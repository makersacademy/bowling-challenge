'use strict';

class Frame {
  constructor() {
    this.TOTAL_PINS = 10;
    this.STRIKE_BONUS = 2;
    this.SPARE_BONUS = 1;
    this.bonusCount = 0;
    this.bonus = 0;
    this.rolls = [];
  }

  addRoll(roll) {
    this.rolls.push(roll);
    if(this._isStrike()) {
      this.bonusCount += this.STRIKE_BONUS;
    } else if(this._isSpare()) {
      this.bonusCount += this.SPARE_BONUS;
    }
  }

  score() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return this.rolls.reduce(reducer);
  }

  isOver() {
    return this._isStrike() || this.rolls.length >= 2;
  }

  addBonus(bonus) {
    if(this.bonusCount === 0) { return; }
    this.bonusCount -= this.SPARE_BONUS;
    this.bonus += bonus;
  }

  _isStrike() {
    return this.rolls.includes(this.TOTAL_PINS);
  }

  _isSpare() {
    let pins = this.rolls[0] + this.rolls[1];
    return pins === this.TOTAL_PINS && !this._isStrike();
  }
}
