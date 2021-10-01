'use strict';

class Bowling {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    if (pins === 10) {
      this.rolls.push([pins, 0])
    } else if (this.rolls.length === 0 || this.rolls[this.rolls.length - 1].length === 2) {
      this.rolls.push([pins])
    } else if (this.rolls[this.rolls.length - 1].length == 1) {
      this.rolls[this.rolls.length - 1].push(pins);
    }
  }

  score() {
    return this.rolls.flat().reduce((partial_sum, a) => partial_sum + a, 0);
  }

}
