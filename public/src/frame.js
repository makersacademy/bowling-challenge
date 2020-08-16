"use strict";

class Frame {
  constructor(rolls) {
    this._rolls = rolls;
  }

  isStrike() {
    return (this._firstRoll() === 10);
  }

  isSpare() {
    return (this._firstRoll() + this._rolls[1] === 10);
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
    if (this.isStrike()) {
      return this.strikeBonus(nextFrame, nextNextFrame);
    } else if (this.isSpare()) {
      return this.spareBonus(nextFrame);
    }
    return 0;
  }

  spareBonus(nextFrame) {
    return (nextFrame !== undefined ? nextFrame._firstRoll(): 0);
  }

  strikeBonus(nextFrame, nextNextFrame) {
    if (nextFrame === undefined) return 0;
    if (nextFrame.isStrike()) {
      if (nextNextFrame !== undefined) {
        return nextFrame._firstRoll() + nextNextFrame._firstRoll();
      } else {
        if (nextFrame._rolls.length === 1) {
          return nextFrame._firstRoll();
        } else {
          return nextFrame._firstRoll() + nextFrame._rolls[1];
        }
      }
    }
    return nextFrame.points();
  }
}
