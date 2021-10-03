'use strict';

class Frame{
  constructor() {
    this.rolls = [];
    this.frameScore = 0;
  }

  addPins(num) {
    this.rolls.push(num)
  }

  calculateTotal() {
    this.frameScore = this.rolls.reduce((a, b) => a + b, 0);
    return this.frameScore
  }

  isStrike() {
    return this.rolls[0] === 10;
  }

  isSpare() {
    return this.rolls[0] + this.rolls[1] === 10 && this.rolls[0] !== 10
  }
}