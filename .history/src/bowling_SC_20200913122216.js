'use strict';

class bowlingGame {

  constructor() {
    this.rolls = [];
    this.frame = 0
  };

  roll(points) {
    this.rolls.push(points);
  };

  gameTotal() {
    let score = 0;
    let rollNum = 0;

    for (this.frame; this.frame < 10; this.frame++) {

      if (this.isStrike(rollNum)) {
        score += strikeBonus(rollNum)
        rollNum++;
        continue;
      };

      const frameTotal = this.rolls[rollNum] + this.rolls[rollNum + 1];
      
      if (this.isSpare(frameTotal)) {
        score += this.spareBonus(rollNum);
      } else {
        score += frameTotal;
      }
      rollNum += 2;
    }
    return score;
  };

  isSpare(frameTotal) {
    return frameTotal === 10;
  };
  
  spareBonus(rollNum) {
    return 10 + this.rolls[rollNum + 2];
  };

  isStrike(rollNum) {
    return this.rolls[rollNum] === 10;
  };

  strikeBonus(rollNum) {
    return 10 + this.rolls[rollNum + 1] + this.rolls[rollNum + 2];
  };

}; 