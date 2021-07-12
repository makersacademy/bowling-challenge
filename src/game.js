

'use strict';

class Game {
  constructor() {
  this.rolls = [];
  }
  
  roll(pins) {
    this.rolls.push(pins)
  }
  score() {
    let totalScore = 0;
    let BowlIndex = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.rolls[BowlIndex] + this.rolls[BowlIndex + 1] == 10) {
        totalScore += this.rolls[BowlIndex] + this.rolls[BowlIndex + 1] + this.rolls[BowlIndex + 2]
      } else {
      totalScore += this.rolls[BowlIndex] + this.rolls[BowlIndex + 1] 
      }
      BowlIndex += 2
    }
    return totalScore
  }
}








