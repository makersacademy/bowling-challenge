"use strict";

class Frame {
  constructor() {
    this.rolls = [];
  }

  newRoll(roll) {
    this.rolls.push(roll);
  }

  isLastRoll() {
    return this.rolls.length > 1 ? true : false;
  }
}
