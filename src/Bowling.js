'use strict';

class Bowling {

  constructor(){
    this.rolls = [];
  };

  hit(pins){
    this.rolls.push(pins)
  };

  score(){
    let result = 0;
    let rollCounter = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this._stirke(rollCounter)) {
        result += this._stirkeScore(rollCounter)
        rollCounter++;
      }
      else if (this._spare(rollCounter)) {
        result += this._spareScore(rollCounter);
        rollCounter += 2;
      }
      else {
      result += this._regScore(rollCounter);
      rollCounter += 2;
      }
    }
    return result; 
  };

  _spare(rollCounter){
    return this.rolls[rollCounter] + this.rolls[rollCounter + 1] == 10;
  };

  _spareScore(rollCounter){
    return 10 + this.rolls[rollCounter + 2];
  };
 
  _stirke(rollCounter){
    return this.rolls[rollCounter] == 10;
  };

  _stirkeScore(rollCounter){
    return 10 + this.rolls[rollCounter + 1] + this.rolls[rollCounter + 2];
  };
  
  _regScore(rollCounter){
    return this.rolls[rollCounter] + this.rolls[rollCounter + 1];
  };

};