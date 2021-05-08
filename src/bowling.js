'use strict';

class Bowling {
  constructor() {
  this.rolls = [];
  }
  
  roll(pins) {
    this.rolls.push(pins)
  }
  score() {
    let totalScore = 0;
    let rollNumber = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.rolls[rollNumber] + this.rolls[rollNumber + 1] == 10) {
        totalScore += this.rolls[rollNumber] + this.rolls[rollNumber + 1] + this.rolls[rollNumber + 2]
      } else {
      totalScore += this.rolls[rollNumber] + this.rolls[rollNumber + 1] 
      }
      rollNumber += 2
    }
    return totalScore
  }
}


  // message() {
  //   return `You are currently on Frame ${this.frame}, with a total score of ${totalScore}.`
  // }