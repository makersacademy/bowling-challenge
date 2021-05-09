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
    let bowling = this;

    for (let frame = 0; frame < 10; frame++) {
      if (spare(rollNumber) ){
        spareBonus(rollNumber)
      } else {
        frameScore(rollNumber)
      }
      rollNumber += 2
    }
    return totalScore;

  function spare(rollNumber) {
   return (bowling.rolls[rollNumber] + bowling.rolls[rollNumber + 1] == 10)
  }
  function spareBonus(rollNumber) {
    return totalScore += bowling.rolls[rollNumber] + bowling.rolls[rollNumber + 1] + bowling.rolls[rollNumber + 2]
  }
  function frameScore(rollNumber) {
    return totalScore += bowling.rolls[rollNumber] + bowling.rolls[rollNumber + 1] 
  }
  }
  
}