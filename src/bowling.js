'use strict';

class Bowling {
  constructor() {
  this.rolls = new Array(21).fill("");
  this.rollsIndex = 0
  }
  
  roll(pins) {
    if(pins > 10) {
      throw new Error('Enter correct number of pins knocked down: 1-10 only!')
    } else {
      this.rolls[this.rollsIndex] = pins
      this.rollsIndex++
    }
  }
  score() {
    let totalScore = 0;
    let rollNumber = 0;
    let bowling = this;

    for (let frame = 0; frame < 10; frame++) {
      if (strike(rollNumber) ){
        strikeBonus(rollNumber)
        rollNumber++
      } else if (spare(rollNumber) ){
        spareBonus(rollNumber)
        rollNumber += 2
      } else {
        frameScore(rollNumber)
        rollNumber += 2
      }
    }
    return parseInt(totalScore);

    function frameScore(rollNumber) {
      return totalScore += bowling.rolls[rollNumber] + bowling.rolls[rollNumber + 1] 
    }
    function bonus(rollNumber) {
      return bowling.rolls[rollNumber + 1] + bowling.rolls[rollNumber + 2]
    }
    function spare(rollNumber) {
    return (bowling.rolls[rollNumber] + bowling.rolls[rollNumber + 1] === 10)
    }
    function spareBonus(rollNumber) {
      return totalScore += bowling.rolls[rollNumber] + bonus(rollNumber)
    }
    function strike(rollNumber) {
      return bowling.rolls[rollNumber] === 10
    }
    function strikeBonus(rollNumber) {
      return totalScore += bowling.rolls[rollNumber] + bonus(rollNumber)
    }
  }
}