// 'use strict';

class Game {

  constructor(){
    this.rolls = []
  }

  roll(pins){
    this.rolls.push(pins);
  }

  score(){
    let result = 0
    let rollsIndex = 0
    for (var i = 0; i < 20; i++) {
      result += this.rolls[rollsIndex]
    }
    return result;
  }

}
