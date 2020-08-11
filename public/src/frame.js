"use strict";

class Frame {
  constructor() {
    this._rolls = [];
  }

  add(roll) {
    if (this._rolls.length === 2 || this.isStrike()) {
      return "No more rolls can be added to this frame";
    }
    this._rolls.push(roll);
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
