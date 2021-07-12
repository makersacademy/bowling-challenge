'use strict';

class Frame {
  constructor() {
    this.rolls = [];
  }

  isEnded() {
    if (this.rolls.length === 2 || this.isStrike()) {
      return true;
    } else {
      return false;
    }
  }

  add(number) {
    this.rolls.push(number);
  }

  pins(turn) {
    const i = turn - 1;
    return this.rolls[i];
  }

  score() {
    let frameScore = 0;
    for (let roll of this.rolls) {
      frameScore += roll;
    }
    return frameScore;
  }

  isStrike() {
    return this.pins(1) === 10;
  }

  isSpare() {
    return this.pins(1) + this.pins(2) === 10;
  }
}