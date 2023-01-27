const readlineSync = require('readline-sync');
// eslint-disable-next-line no-unused-vars
const colors = require('colors');

class UserInterface {
  constructor(game, io = console) {
    this.game = game;
    this.io = io;
  }

  getRollOne() {
    this.rollOne = parseInt(
      readlineSync.question('Enter your first roll: ', {
        limit: /^(0?[1-9]|10)$/,
        limitMessage: 'Please enter a valid number of pins!'.red,
      })
    );
    return this.rollOne;
  }

  validateRollTwo(remainingPins) {
    let rollTwo = parseInt(readlineSync.question('Enter your second roll: '));
    while (rollTwo > remainingPins) {
      console.log(`Invalid input. You have ${remainingPins} remaining.`.red);
      rollTwo = parseInt(readlineSync.question('Enter your second roll: '));
    }
    return rollTwo;
  }

  getRollTwo() {
    let remainingPins = 10 - this.rollOne;
    if (remainingPins > 0) {
      this.rollTwo = this.validateRollTwo(remainingPins);
    } else if (this.game.frameCount === 10 && remainingPins === 0) {
      this.rollTwo = this.validateRollTwo(10);
    } else {
      this.rollTwo = 0;
    }
    return this.rollTwo;
  }

  getRollThree() {
    if (
      (this.game.frameCount === 10 && this.rollOne === 10) ||
      (this.game.frameCount === 10 && this.rollOne + this.rollTwo === 10)
    ) {
      this.rollThree = parseInt(
        readlineSync.question('Enter your bonus last roll: '.magenta, {
          limit: /^(0?[1-9]|10)$/,
          limitMessage: 'Please enter a valid number of pins!'.red,
        })
      );
    } else {
      this.rollThree = 0;
    }
    return this.rollThree;
  }
}

module.exports = UserInterface;
