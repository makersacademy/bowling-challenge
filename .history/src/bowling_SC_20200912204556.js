'use strict';

class bowlingGame {

  constructor() {
    this.rolls = [];
    this.runningScore = 0
    this.frame = 0
  };

  roll(points) {
    this.rolls.push(points);
    this.runningScore += points
  };

  score() {
    let score = 0;
    let rollIndex = 0;

    for (this.frame; this.frame < 10; this.frame++) {
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