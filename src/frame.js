// 'use strict';

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
    const numberOfPinsError = 'Total number of pins cannot be more than 10';
    const twoRollsPerFrameError = 'Only two rolls per frame are allowed';

    if (this.total() + pins > 10) {
      throw new Error(numberOfPinsError);
    }

    if (this.rolls.length < 2) {
      this.rolls.push(pins);
    } else {
      throw new Error(twoRollsPerFrameError);
    }
  }
}
