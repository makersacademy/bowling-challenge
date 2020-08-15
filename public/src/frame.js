"use strict";

class Frame {
  constructor(rolls) {
    this._rolls = rolls;
    this._firstRoll = rolls[0]
  }


  isStrike() {
    return (this._rolls[0] === 10);
  }

  isSpare() {
    return (this._rolls[0] + this._rolls[1] === 10);
  }

  points() {
    return this._rolls.reduce(pointSum);
    function pointSum(total, rollPoints) {
      return total + rollPoints
    }
  }

  spareBonus() {
    return this._firstRoll;
  }

  strikeBonus() {
    if (this._rolls.length === 1) {
      return this._rolls[0]
    } 
    return (this._rolls[0] + this._rolls[1])
  }
}
