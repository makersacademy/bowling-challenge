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
    this.pin_1 = a
    this.pin_2 = b
    this.frame ++;
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
      this.gameScore += 10 + (a * 2) + b
    } else if (this.strike === true){
      this.gameScore += 10 + (a * 2) + (b * 2)
    } else {
      this.gameScore += a + b
      this.rolls.push(a, b)
      this.strike = false
      this.spare = false
      return this.gameScore
    }
  }

  canPlay(){
    return (this.frame < 10)
  }

  isStrike(){
    this.strike = true
  }

  isSpare(){
    this.spare = true
  }

  // strikeBonus(){
  //   this.strike = false
  // }

  // spareBonus(){
  //   this.spare = false
  // }


};
