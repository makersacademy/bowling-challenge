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
    this.rolls.push(a, b);
    this.frame ++;
    if (this.canPlay() === false) {
      throw 'End of Game'
    } else if ((a === 10) && (this.strike === false)) {
      this.isStrike();
    } else if ((a === 10) && (this.strike === true)) {
      this.gameScore += 10
   }  else if (a + b === 10) {
      this.gameScore += a
      this.isSpare();
    } else if (this.spare === true){
      this.gameScore += a + b
    } else if (this.strike === true){
      this.gameScore += (a * 2) + (b * 2)
    } else {
      this.gameScore += a + b
      this.strike = false
      this.spare = false
      return this.gameScore
    }
  }

  canPlay(){
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

  // strikeBonus(){
  //   this.strike = false
  // }

  // spareBonus(){
  //   this.spare = false
  // }


};
