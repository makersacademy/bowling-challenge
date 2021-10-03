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
}