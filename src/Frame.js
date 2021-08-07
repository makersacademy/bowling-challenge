"use strict";

class Frame {
  constructor() {
    this.rolls = [];
  }

  newRoll(roll) {
    this.rolls.push(roll);
  }
}
