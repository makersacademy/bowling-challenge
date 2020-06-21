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
    if (this.canPlay() === false) {
      throw 'End of Game'
    }
    else if ((this.canPlay() && a === 10)) {
      this.isStrike
      this.frame ++
      return "strike";
    } else if (a + b === 10) {
      this.isSpare
      this.frame ++
      return "spare";
    } else {
      this.gameScore += a + b
      this.rolls.push(a, b)
      this.frame ++
      return this.gameScore
    }
  }

  canPlay(){
    return (this.frame < 10)
  }




};
