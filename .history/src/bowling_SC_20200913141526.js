'use strict';

class bowlingGame {

  constructor() {
    this.rolls = [];
    this.runningScore = 0
    this.frameIndex = 1
    this.rollIndex = 0
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

      if (this.isStrike(this.rollIndex)) {
        bonus += this.strikeBonus(this.rollIndex)
        this.rollIndex++;
      };

      const frameTotal = this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1];
      
      if (this.isSpare(frameTotal)) {
        bonus += this.spareBonus(this.rollIndex);
      };
      this.rollIndex += 2;

    this.runningScore += bonus;
  };

  isSpare(frameTotal) {
    return frameTotal === 10;
  };
  
  spareBonus(this.rollIndex) {
    return this.rolls[this.rollIndex + 2];
  };

  isStrike(this.rollIndex) {
    return this.rolls[this.rollIndex] === 10;
  };

  strikeBonus(this.rollIndex) {
    return this.rolls[this.rollIndex + 1] + this.rolls[this.rollIndex + 2];
  };

}; 