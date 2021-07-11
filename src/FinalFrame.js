'use strict';

class FinalFrame {
  constructor() {
    this.rolls = [];
  }
  
  isEnded() {
    if (this.rolls.length === 2 && (this.pins(1) + this.pins(2) < 10) || this.rolls.length === 3) {
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

  score() {
    if (this.isStrike()) {
      return this.pins(1);
    } else {
      return this.pins(1) + this.pins(2);
    }
  }

  isStrike() {
    return this.pins(1) === 10;
  }

  isSpare() {
    return this.pins(1) + this.pins(2) === 10;
  }

  bonusScore() {
    if (this.isSpare()) {
      return this.pins(3);
    } else if (this.isStrike()) {
      return this.pins(2) + this.pins(3);
    }
  }
}