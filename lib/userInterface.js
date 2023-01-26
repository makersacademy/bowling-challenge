const readlineSync = require('readline-sync');

class UserInterface {
  constructor() {
    this.inputs = [];
  }

  getRollOne() {
    this.rollOne = parseInt(
      readlineSync.question('Enter your first roll: ', {
        limit: /^(0?[1-9]|10)$/,
        limitMessage: 'Please enter a valid number of pins!',
      })
    );
    return this.rollOne;
  }

  validateRollTwo(remainingPins) {
    let rollTwo = parseInt(readlineSync.question('Enter your second roll: '));
    while (rollTwo > remainingPins) {
      console.log('Invalid input. You have ' + remainingPins + ' remaining.');
      rollTwo = parseInt(readlineSync.question('Enter your second roll: '));
    }
    return rollTwo;
  }

  getRollTwo() {
    let remainingPins = 10 - this.rollOne;
    if (remainingPins > 0) {
      this.rollTwo = this.validateRollTwo(remainingPins);
    } else {
      this.rollTwo = 0;
    }
    return this.rollTwo;
  }

  getRollThree() {
    this.rollOne = parseInt(
      readlineSync.question('Enter your bonus last roll: ', {
        limit: /^(0?[1-9]|10)$/,
        limitMessage: 'Please enter a valid number of pins!',
      })
    );
    return this.rollOne;
  }

  clearRolls() {
    this.rollOne = 0;
  }
}

module.exports = UserInterface;
