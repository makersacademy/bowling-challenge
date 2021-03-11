'use strict';

class Frame {
  constructor() {
    this.rolls = [];
  }

  addRoll(roll) {
    this.rolls.push(roll);
  }

  score() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return this.rolls.reduce(reducer);
  }
}

// module.exports = Frame;
