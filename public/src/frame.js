"use strict";

class Frame {
  constructor(rolls) {
    this._rolls = rolls;
    this._MAXIMUM_SCORE = 10;
  }

  isStrike() {
    return (this._firstRoll() === this._MAXIMUM_SCORE);
  }

  isSpare() {
    return (this._firstRoll() + this._rolls[1] === this._MAXIMUM_SCORE);
  }

  points() {
    return this._rolls.reduce(pointSum);
    function pointSum(total, rollPoints) {
      return total + rollPoints;
    }
  }

  _firstRoll() {
    return this._rolls[0];
  }

  bonusPoints(nextFrame, nextNextFrame) {
    if (this.isStrike()) return this.strikeBonus(nextFrame, nextNextFrame);
    if (this.isSpare()) return this.spareBonus(nextFrame);
    return 0;
  }

  spareBonus(nextFrame) {
    return (nextFrame !== undefined ? nextFrame._firstRoll() : 0);
  }

  strikeBonus(nextFrame, nextNextFrame) {
    if (nextFrame === undefined) return 0;
    if (nextFrame.isStrike() && nextNextFrame !== undefined) {
      return nextFrame._firstRoll() + nextNextFrame._firstRoll();
    } else if (nextFrame.isStrike() && nextNextFrame === undefined) {
      return (nextFrame._rolls.length === 1 ? nextFrame._firstRoll() : nextFrame._firstRoll() + nextFrame._rolls[1]);
    }
    return nextFrame.points();
  }
}
