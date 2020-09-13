'use strict';

class bowlingGame {

  constructor() {
    this.rolls = [];
    this.frame = 0
  };

  roll(points) {
    this.rolls.push(points);
  };

  score() {
    let score = 0;
    let rollNum = 0;

    for (this.frame; this.frame < 10; this.frame++) {
      const frameTotal = this.rolls[rollNum] + this.rolls[rollNum + 1];
      
      if (frameTotal === 10) {
        score += 10 + this.rolls[rollNum + 2];
      } else {
        score += frameTotal;
      }
      rollNum += 2;
    }
    return score;
  };


}; 