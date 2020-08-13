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
    var points = 0;
    this._rolls.forEach(sum);
    function sum(rollScore) {
      points += rollScore;
    }
    return points;
  }
}
