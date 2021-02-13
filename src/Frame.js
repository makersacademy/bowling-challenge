"use strict";

class Frame {

  constructor(number) {
    this.number = number
    this.rolls = []
  }

  addRoll(pins) {
    if (this.isCompleted()) {
      throw new Error("This frame is completed")
    }
    this.rolls.push(pins)
  }

  isCompleted() {
    if (this.number < 10) {
      return ( this.rolls.length === 2) || ( this.rolls[0] === 10 )
    } else if ((this.rolls[0] + this.rolls[1]) < 10 ) {
      return this.rolls.length === 2
    } else {
      return this.rolls.length === 3
    }
  }

  isStrike() {
    return this.rolls[0] === 10
  }

  isSpare() {
    return (this.rolls[0] + this.rolls[1]) === 10
  }

  owedRolls() {
    if (this.isStrike()) {
      return 2
    } else {
      return this.isSpare() ? 1 : 0
    }
  }

}
