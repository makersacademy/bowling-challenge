'use strict';

class Frame {
  constructor(roll1, roll2) {
    this.rolls = [roll1, roll2];
    this.currentRoll = 0;
  }

  nextRoll() {
    this.currentRoll += 1;
  }

  setCurrentRollScore(score) {
    this.rolls[this.currentRoll].setScore(score);
  }
}