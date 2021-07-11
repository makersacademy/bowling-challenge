'use strict';

class Frame {
  constructor() {
    this.rolls = [];
  }

  isEnded() {
    if (this.rolls.length === 2) {
      return true;
    } else if (this.pins(1) === 10) {
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
}