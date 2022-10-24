'use strict';

class Game {
  constructor() {
  this.rolls = [];
  }
  
  roll(pins) {
    this.rolls.push(pins)
  }
  score() {
    let total = 0;
    let rollIndex = 0;
    let bowling = this;

    for (let frame = 0; frame < 10; frame++) {
      if (strike(rollIndex) ){
        strikeScore(rollIndex)
        rollIndex++
      } else if (spare(rollIndex) ){
        spareScore(rollIndex)
        rollIndex += 2
      } else {
        frameScore(rollIndex)
        rollIndex += 2
      }
    }
    return total;

    function frameScore(rollIndex) {
      return total += bowling.rolls[rollIndex] + bowling.rolls[rollIndex + 1] 
    }
    function bonus(rollIndex) {
      return bowling.rolls[rollIndex + 1] + bowling.rolls[rollIndex + 2]
    }
    function spare(rollIndex) {
    return (bowling.rolls[rollIndex] + bowling.rolls[rollIndex + 1] === 10)
    }
    function spareScore(rollIndex) {
      return total += bowling.rolls[rollIndex] + bonus(rollIndex)
    }
    function strike(rollIndex) {
      return bowling.rolls[rollIndex] === 10
    }
    function strikeScore(rollIndex) {
      return total += bowling.rolls[rollIndex] + bonus(rollIndex)
    }
  }
}