'use strict';

class Bowling {
  constructor(){
    this._rolls = [];
  }

  roll(pins){
    this._rolls.push(pins)
  }

  get score(){
    var result = 0;
    var roll_index = 0;

    for(var i = 0; i < 10; i++) {
      result += this._rolls[roll_index] + this._rolls[roll_index + 1];
      roll_index += 2;
    }
    return result;
  }


}
