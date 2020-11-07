'use strict';

class Bowling {
  constructor() {
    this.rolls = [];
  }

  roll(pins) {
    this.rolls.push(pins);
  }

  totalScore() {
    let total = 0;
    let rollNumber = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.rolls[rollNumber] === 10) {
        total += 10 + this.rolls[rollNumber + 1] + this.rolls[rollNumber + 2];
        rollNumber++;
        continue;
      }
      
      const frameScore = this.rolls[rollNumber] + this.rolls[rollNumber +1];
      
      if (this.isSpare(frameScore)) {
        total += this.spareScore(rollNumber);
      } else {
        total += frameScore;
      }
      rollNumber += 2
    }
    return total;
  }

  isSpare(frameScore) {
    return frameScore === 10;
  }

  spareScore(rollNumber) {
    return 10 + this.rolls[rollNumber + 2];
  }
};