'use strict'

class Game{
  constructor() {
    this.rolls = []
    this.gameScore = 0
    this.frame = 0
    this.spare = false
    this.strike = false
  }

  score(a, b){
    if (a === 10) {
      this.isStrike
      return "strike";
    } else if (a + b === 10) {
      this.isSpare
      return "spare";
    } else {
      this.gameScore += a + b
      this.rolls.push(a, b)
      this.frame ++
      return this.gameScore

    }
}

};
