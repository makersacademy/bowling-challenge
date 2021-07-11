'use strict';

class Frame {
  constructor() {
    this.rolls = [];
  }

  isEnded() {
    return false;
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