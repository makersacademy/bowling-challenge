"use strict";

class Frame {
  constructor(rolls) {
    this._rolls = rolls;
  }

  showRolls() {
    return this._rolls;
  }

  isStrike() {
    return (this._rolls[0] === 10);
  }

  isSpare() {
    return (this._rolls[0] + this._rolls[1] === 10);
  }

  getBasePoints() {
    return this._rolls.reduce(pointSum);
    function pointSum(total, rollPoints) {
      return total + rollPoints
    }
  }
  spareBonus() {
    return this._rolls[0];
  }
}
