'use strict'

class Game{
  constructor() {
    this.roll = 0
    this.rolls = []
  }

  isStrike(x){
    return this.rolls[x] === 10;
  }


  isSpare(roll_1, roll_2){
    return this.rolls[x] && this.rolls[x + 1] === 10
  }

  strikeBonus(){
    return this.rolls[x + 1] + this.rolls[x + 2];
  }

  spareBonus(){
    return this.rolls[x + 2];
  }

};
