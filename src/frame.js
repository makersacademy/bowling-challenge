'use strict';

class Frame {
  constructor(rolls){
    this.rolls = rolls
  }

  isSpare(){
    return this.rolls[0] + this.rolls[1] === 10 && this.rolls[0] !== 10
  }

  isStrike(){
    return this.rolls[0] === 10
  }
}
