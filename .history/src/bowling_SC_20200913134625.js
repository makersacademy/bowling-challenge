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
  
  spareBonus(rollIndex) {
    return this.rolls[rollIndex + 2];
  };

  isStrike(rollIndex) {
    return this.rolls[rollIndex] === 10;
  };

  strikeBonus(rollIndex) {
    return this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
  };

}; 