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

  // gameTotal() {
  //   let score = 0;
  //   let rollNum = 0;

  //   for (let frameIndex = 0; frameIndex < 10; frameIndex++) {

  //     if (this.isStrike(rollNum)) {
  //       score += this.strikeBonus(rollNum)
  //       rollNum++;
  //       continue;
  //     };

  //     const frameTotal = this.rolls[rollNum] + this.rolls[rollNum + 1];
      
  //     if (this.isSpare(frameTotal)) {
  //       score += this.spareBonus(rollNum);
  //     } else {
  //       score += frameTotal;
  //     }
  //     rollNum += 2;
  //   }
  //   this.runningScore += score;
  // };

  // isSpare(frameTotal) {
  //   return frameTotal === 10;
  // };
  
  // spareBonus(rollNum) {
  //   return 10 + this.rolls[rollNum + 2];
  // };

  // isStrike(rollNum) {
  //   return this.rolls[rollNum] === 10;
  // };

  // strikeBonus(rollNum) {
  //   return 10 + this.rolls[rollNum + 1] + this.rolls[rollNum + 2];
  // };

}; 