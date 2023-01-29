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
        limit: /^(0|[1-9]|10)$/,
        limitMessage: 'Please enter a valid number of pins!'.red,
      })
    );
    return this.rollOne;
  }

  validateRollTwo(remainingPins) {
    let rollTwo = parseInt(readlineSync.question('Enter your second roll: '));
    if (rollTwo > remainingPins) {
      console.log(`Invalid input. You have ${remainingPins} remaining.`.red);
      return this.validateRollTwo(remainingPins);
    }
    return rollTwo;
  }

  getRollTwo() {
    let remainingPins =
      this.game.frameCount === 10 && this.rollOne === 10
        ? 10
        : 10 - this.rollOne;
    this.rollTwo = remainingPins > 0 ? this.validateRollTwo(remainingPins) : 0;
    return this.rollTwo;
  }

  getRollThree() {
    if (this.game.frameCount !== 10) {
      this.rollThree = 0;
      return this.rollThree;
    }

    this.rollThree =
      this.rollOne === 10 || this.rollOne + this.rollTwo === 10
        ? parseInt(
            readlineSync.question('Enter your bonus last roll: '.magenta, {
              limit: /^(0|[1-9]|10)$/,
              limitMessage: 'Please enter a valid number of pins!'.red,
            })
          )
        : 0;

    return this.rollThree;
  }
}

module.exports = UserInterface;
