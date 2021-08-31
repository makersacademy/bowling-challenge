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
    if (this.number === 10) {
      return this.displayResults10thFrame()
    } else {
      let firstRoll = this.rolls[0]
      let secondRoll = this.rolls[1]
      if (typeof secondRoll === "undefined") secondRoll = ""

      if (this.rolls[0] === 10 ) {
        firstRoll = ""
        secondRoll = "X"
      } else if (this.rolls[0] + this.rolls[1] === 10) {
        secondRoll = "/"
      }

      return [`${firstRoll}`, `${secondRoll}`]
    }
  }

  displayResults10thFrame() {
    let firstRoll = this.rolls[0]
    let secondRoll = this.rolls[1]
    let thirdRoll = this.rolls[2]
    let fourthRoll = ""

    if (typeof secondRoll === "undefined") secondRoll = ""
    if (typeof thirdRoll === "undefined") thirdRoll = ""

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
      thirdRoll = this.rolls[1]
      fourthRoll = "/"
    } else if (this.rolls[0] === 10 ) {
      firstRoll = ""
      secondRoll = "X"
    } else if (this.rolls[0] + this.rolls[1] === 10) {
      secondRoll = "/"
    }
    return [`${firstRoll}`, `${secondRoll}`, `${thirdRoll}`, `${fourthRoll}`]
  }

}
