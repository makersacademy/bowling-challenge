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

  displayResults() {
    let firstRoll = this.rolls[0]
    let secondRoll = this.rolls[1]
    let thirdRoll = this.rolls[2]
    let fourthRoll = ""

    if (!secondRoll) secondRoll = ""
    if (!thirdRoll) thirdRoll = ""

    if (this.rolls[0] === 10 && this.rolls[1] === 10 && this.rolls[2] === 10) {
      firstRoll = ""
      secondRoll = "X"
      thirdRoll = "X"
      fourthRoll = "X"
    } else if (this.rolls[0] === 10 && this.rolls[1] === 10) {
      let finalBox = this.rolls[2]
      if (!finalBox) finalBox = ""
      firstRoll = ""
      secondRoll = "X"
      thirdRoll = "X"
      fourthRoll = finalBox
    } else if ((this.rolls[0] === 10) && (this.rolls[1] + this.rolls[2] === 10)) {
      firstRoll = ""
      secondRoll = "X"
      thirdRoll = "/"
    } else if (this.rolls[0] === 10 ) {
      firstRoll = ""
      secondRoll = "X"
    } else if (this.rolls[0] + this.rolls[1] === 10) {
      firstRoll = ""
      secondRoll = "/"
    }

    if (this.number < 10) {
      return [`${firstRoll}`, `${secondRoll}`]
    } else {
      return [`${firstRoll}`, `${secondRoll}`, `${thirdRoll}`, `${fourthRoll}`]
    }
  }

}
