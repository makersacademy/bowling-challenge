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

  bonusCalc() {
    let bonus = 0;
    let rollIndex = 0;

      if (this.isStrike(rollIndex)) {
        bonus += this.strikeBonus(rollIndex)
        rollIndex++;
      };

      const frameTotal = this.rolls[rollIndex] + this.rolls[rollIndex + 1];
      
      if (this.isSpare(frameTotal)) {
        bonus += this.spareBonus(rollIndex);
      };
      rollIndex += 2;

    this.runningScore += bonus;
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