'use strict';

class FinalFrame {
  constructor() {
    this.rolls = [];
  }
  
  isEnded() {
    if (this.rolls.length === 2 && (this.pins(1) + this.pins(2) < 10)) {
      return true;
    } else {
      return false;
    }
  }

  add(number) {
    this.rolls.push(number);
  }

  pins(turn) {
    const i = turn - 1;
    return this.rolls[i];
  }
}