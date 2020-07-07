'use strict';

class Frame {
  constructor(index) {
    this.firstRoll = 0;
    this.secondRoll = 0;
    this.thirdRoll = 0;
    this.index = index;
    this.score = 0;
  }
  roll(x,y,z) {
    this.firstRoll = x;
    if (y) {
      this.secondRoll = y;
    }
    if (z) {
      this.thirdRoll = z;
    }
  }
  calculatePins() {
    return this.score = this.firstRoll + this.secondRoll + this.thirdRoll;
  }
  hasSpare() {
    if (this.firstRoll + this.secondRoll == 10 && this.firstRoll != 10) {
      return true;
    }
  }
  hasStrike() {
    if (this.firstRoll == 10) {
      return true;
    }
  }
  getIndex() {
    return this.index;
  }
  isSpare() {
    return this.pins() >= 10;
  }
  pins() {
    return this.rolls.reduce(function(a, b) {
      return a + b;
    });
  }
  isStrike() {
    return this.rolls[0] == 10;
  }
}
