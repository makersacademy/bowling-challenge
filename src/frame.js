'use strict';

class Frame {
  constructor(roll1, roll2) {
    this.rolls = [roll1, roll2];
    this.currentRollIndex = 0;
  }

  getCurrentRoll() {
    return this.rolls[this.currentRollIndex]
  }

  nextRoll() {
    this.currentRollIndex += 1;
  }

  setCurrentRollScore(score) {
    this.getCurrentRoll().setScore(score);
  }

  finished() {
    if(this.rolls[0].getScore() >= 0 && this.rolls[1].getScore() >= 0) {
      return true;
    } else if(this.rolls[0].getScore() >= 10) {
      return true;
    } else {
      return false;
    }
  }
}