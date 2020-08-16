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
    } else {
    return 0;
    }
  }

  spareBonus(nextFrame) {
    if (nextFrame !== undefined) {
      return nextFrame._firstRoll();
    }
    return 0;
  }

  strikeBonus(nextFrame, nextNextFrame) {
    if (nextFrame === undefined) {
      return 0;
    } else if (nextFrame.isStrike() && nextNextFrame !== undefined) {
      return nextFrame._firstRoll() + nextNextFrame._firstRoll();
    } else if (nextFrame.isStrike() && nextNextFrame === undefined) {
      if (nextFrame._rolls.length < 2) {
        return nextFrame._firstRoll();
      } else {
      return nextFrame._firstRoll() + nextFrame._rolls[1];
      }
    }
    return nextFrame.points();
  }
}
