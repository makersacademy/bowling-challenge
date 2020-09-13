'use strict';

class bowlingGame {

  constructor() {
    this.rolls = [];
    this.runningScore = 0
  };

  roll(points) {
    this.rolls.push(points);
    this.runningScore += points
  };

  score() {
    let score = 0;
    let rollIndex = 0;

    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      const frameTotal = this.rolls[rollIndex] + this.rolls[rollIndex + 1];
      
      if (frameTotal === 10) {
        score += 10 + this.rolls[rollIndex + 2];
      } else {
        score += frameTotal;
      }
      rollIndex += 2;
    }
    return score;
  };


}; 