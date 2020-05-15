'use strict';

class Frame {
  constructor(rollClass) {
    this.rolls = [new rollClass(-1), new rollClass(-1)];
    this.currentRoll = 0;
  }

  nextRoll() {
    this.currentRoll += 1;
  }
}