'use strict';

class bowlingGame {

  constructor() {
    this.rolls = [];
    this.runningScore = 0;
    this.frameIndex = 1;
    this.rollIndex = 0;
  };

  nextFrame() {
    this.frameIndex++;
  };

  firstRoll(points) {
    this.rolls.push(points);
    this.runningScore += points;
    if (this.isStrike()) {
      this.frameIndex++
    };
  };

  secondRoll(points) {
    this.rolls.push(points);
    this.runningScore += points;
  };

  bonusCalc() {
    let bonus = 0;

      if (this.isStrike()) {
        bonus += this.strikeBonus()
        this.rollIndex++;
      };

      const frameTotal = this.rolls[this.rollIndex] + this.rolls[this.rollIndex + 1];
      
      if (this.isSpare(frameTotal)) {
        bonus += this.spareBonus();
      };
      this.rollIndex += 2;

    this.runningScore += bonus;
  };

  isSpare(frameTotal) {
    return frameTotal === 10;
  };
  
  spareBonus() {
    return this.rolls[this.rollIndex + 2];
  };

  isStrike() {
    return this.rolls[this.rollIndex] === 10;
  };

  strikeBonus() {
    return this.rolls[this.rollIndex + 1] + this.rolls[this.rollIndex + 2];
  };

}; 