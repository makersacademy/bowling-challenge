'use strict';

class bowlingGame {

  constructor() {
    this.rolls = [[], [], [], [], [], [], [], [], [], []];
    this.runningScore = 0;
    this.frameIndex = 1;
    this.rollIndex = 0;
  };

  frameScore() {
    frame1.innerHTML = this.rolls[0];
    frame2.innerHTML = this.rolls[1];
    frame3.innerHTML = this.rolls[2];
    frame4.innerHTML = this.rolls[3];
    frame5.innerHTML = this.rolls[4];
    frame6.innerHTML = this.rolls[5];
    frame7.innerHTML = this.rolls[6];
    frame8.innerHTML = this.rolls[7];
    frame9.innerHTML = this.rolls[8];
    frame10.innerHTML = this.rolls[9];
  };

  firstRoll(points) {
    this.rolls[this.frameIndex -1].push(points);
    this.runningScore += points;
    if (points === 10) {
      this.frameIndex++
    };
  };

  secondRoll(points) {
    this.rolls[this.frameIndex -1].push(points);
    this.runningScore += points;
    this.frameIndex++
  };

  spareCalc() {
    let bonus = 0;
    const frameTotal = this.rolls[this.frameIndex - 2][this.rollIndex] + this.rolls[this.frameIndex - 2][this.rollIndex + 1];
    if (this.isSpare(frameTotal)) {
      bonus += this.spareBonus();
    };
    this.runningScore += bonus;
  };

  strikeCalc() {
    let bonus = 0;
    if (this.isStrike()) {
      bonus += this.strikeBonus()
    };
    this.runningScore += bonus;
  };

  isSpare(frameTotal) {
    return frameTotal === 10;
  };
  
  spareBonus() {
    return this.rolls[this.frameIndex - 1][this.rollIndex];
  };

  isStrike() {
    return this.rolls[this.frameIndex - 3][this.rollIndex] === 10;
  };

  strikeBonus() {
    return this.rolls[this.frameIndex - 2][this.rollIndex] + this.rolls[this.frameIndex - 2][this.rollIndex + 1];
  };

}; 