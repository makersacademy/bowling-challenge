'use strict';

class Bowling {

  constructor() {
    this.numberOfTurns = 0;
    this.currentRoll = 0;
    this.allRolls = [];
  }

  roll(numberOfPins) {
    this.currentRoll = numberOfPins
    this.allRolls.push(numberOfPins)
    return numberOfPins;
  }

  isStrike(indexOfRoll) {
    return this.allRolls[indexOfRoll] === 10; 
  }

  isSpare(indexOfRoll) {
    return this.allRolls[indexOfRoll] + this.allRolls[indexOfRoll + 1] === 10;
  }
  
  nextRollsAfterStrike(indexOfRoll) {
    return this.allRolls[indexOfRoll + 1] + this.allRolls[indexOfRoll + 2];
  }

  nextRollsAfterSpare(indexOfRoll) {
    return this.allRolls[indexOfRoll + 2];
  }

  allRollsSum(indexOfRoll) {
    return this.allRolls[indexOfRoll] + this.allRolls[indexOfRoll + 1];
  }
}

