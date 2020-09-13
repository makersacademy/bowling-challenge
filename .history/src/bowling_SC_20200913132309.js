'use strict';

class bowlingGame {

  constructor() {
    this.rolls = [];
    this.runningScore = 0
    this.frameIndex = 1
  };

  nextFrame() {
    this.frameIndex++
  };

  roll(points) {
    this.rolls.push(points);
    this.runningScore += points;
  };

  gameTotal() {
    let bonus = 0;
    let rollNum = 0;

      if (this.isStrike(rollNum)) {
        bonus += this.strikeBonus(rollNum)
        rollNum++;
        continue;
      };

      const frameTotal = this.rolls[rollNum] + this.rolls[rollNum + 1];
      
      if (this.isSpare(frameTotal)) {
        score += this.spareBonus(rollNum);
      } else {
        score += frameTotal;
      });
      rollNum += 2;

    this.runningScore += score;

  };

  isSpare(frameTotal) {
    return frameTotal === 10;
  };
  
  spareBonus(rollNum) {
    return this.rolls[rollNum + 2];
  };

  isStrike(rollNum) {
    return this.rolls[rollNum] === 10;
  };

  strikeBonus(rollNum) {
    return this.rolls[rollNum + 1] + this.rolls[rollNum + 2];
  };

}; 