'use strict'

class Bowling {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  score() {
  let score = 0;
  let rollIndex = 0;

  for(let i = 0; i < 10; i++) {
    if (this.isSpare(rollIndex)) {
      score += this.spareScore(rollIndex);
    } else {
      score += this.frameScore(rollIndex);
    }
    rollIndex += 2;
    }
    return score;
  }

  isSpare(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
  }
  
  spareScore(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  }
  
  frameScore(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  }

};
