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
    for (let i = 0; i < 20; i++) {
      totalScore += this.rolls[i]
    }
    return totalScore
  }
}


  // message() {
  //   return `You are currently on Frame ${this.frame}, with a total score of ${totalScore}.`
  // }