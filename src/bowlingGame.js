'use strict'

class Game{
  constructor() {
    this.rolls = []
    this.gameScore = 0
    this.frame = 0
    this.strike = false
    this.spare = false
  }

  score(a, b){
    if (this.canPlay() === false) {
      throw 'End of Game'
    }
    else if ((this.canPlay() && a === 10)) {
      this.rolls.push(a, b)
      this.isStrike();
    } else if (a + b === 10) {
      this.rolls.push(a, b)
      this.isSpare();
    } else if (this.spare === true){
      this.spareBonus();
    } else if (this.strike === true){
      this.strikeBonus();
    } else {
      this.gameScore += a + b
      this.rolls.push(a, b)
      this.strike = false
      this.spare = false
      return this.gameScore
    }
  }

  canPlay(){
    this.frame ++
    return (this.frame < 10)
  }

  isStrike(){
    this.gameScore += 10
    this.strike = true
  }

  isSpare(){
    this.gameScore += 10
    this.spare = true
  }

  strikeBonus(){

  }

  spareBonus(){


  }


};
