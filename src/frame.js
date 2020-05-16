'use strict'

class Frame {
  constructor() {
    this.rolls = [];
  }

  total() {
    let roll1 = this.rolls[0];
    let roll2 = this.rolls[1];

    let sum = this.rolls.reduce((roll1, roll2) => roll1 + roll2, 0);

    return sum;
  }

  getRolls() {
    return this.rolls;
  }

  setRolls(pins) {
    this.rolls.push(pins);
  }
}
