'use strict';

class Frame {
  constructor() {
    this.firstRoll = null;
    this.secondRoll = null;
    this.thirdRoll = null;
    this.index = -1;
  }
  roll(number) {
    if (!this.firstRoll) {
      this.firstRoll = number;
    } else if (!this.secondRoll) {
      this.secondRoll = number;
    } else {
      this.thirdRoll = number;
    }
  }

  calculatePins() {
    if (this.firstRoll == null) {
      this.firstRoll = 0;
    }
    if (this.secondRoll == null) {
      this.secondRoll = 0;
    }
    if (this.thirdRoll == null) {
      this.thirdRoll = 0;
    }
    return this.firstRoll + this.secondRoll + this.thirdRoll;
  }
  hasSpare() {
    if (this.firstRoll + this.secondRoll == 10) {
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

}
