/* eslint-disable func-names */
/* eslint-disable no-underscore-dangle */
class Frame {
  constructor(rolls) {
    this.MAXIMUM_SCORE = 10;
    this.rolls = rolls;
  }
  
  total(nextFrame, thirdFrame) {
    return this._rollScore() + this._bonus(nextFrame, thirdFrame);
  }

  _rollScore() {
    return this.rolls.reduce(function (score, roll) {
      return score + roll;
    }, 0);
  }

  _bonus(nextFrame, thirdFrame) {
    if (nextFrame === undefined) {
      return 0;
    }
    if (this._isStrike()) {
      return nextFrame._strikeBonus(thirdFrame);
    }
    if (this._isSpare()) {
      return nextFrame._spareBonus();
    }
    return 0;
  }

  _isStrike() {
    return this._firstRoll() === this.MAXIMUM_SCORE;
  }

  _isSpare() {
    return this._rollScore() === this.MAXIMUM_SCORE;
  }

  _spareBonus() {
    return this._firstRoll();
  }

  _strikeBonus(thirdFrame) {
    if (this._isStrike() && thirdFrame !== undefined) {
      return this._rollScore() + thirdFrame._firstRoll();
    }
    return this._firstRoll() + this.rolls[1];
  }

  _firstRoll() {
    return this.rolls[0];
  }
}
