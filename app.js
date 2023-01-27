const UserInterface = require('./lib/userInterface');
const Frame = require('./lib/frame');
const Game = require('./lib/game');
// eslint-disable-next-line no-unused-vars
var colors = require('colors');

class Application {
  constructor() {
    this.game = new Game();
    this.UI = new UserInterface(this.game);
  }

  run() {
    this.titleText();
    for (let i = 0; i < 10; i++) {
      console.log(`\nYou are on frame ${this.UI.game.frameCount}`.yellow.bold);
      let rollOne = this.UI.getRollOne();
      let rollTwo = this.UI.getRollTwo();
      let rollThree = this.UI.getRollThree();
      let frame = new Frame(rollOne, rollTwo, rollThree);
      this.UI.game.add(frame);
    }
    console.log(
      `Your total score is: ${this.UI.game.calculateGrandTotal()}`.green
    );
  }

  titleText() {
    console.log(
      '          ░█▀▄░█▀█░█░█░█░░░▀█▀░█▀█░█▀▀░░░█▀▀░█▀▀░█▀█░█▀▄░█▀▀'.yellow
    );
    console.log(
      '          ░█▀▄░█░█░█▄█░█░░░░█░░█░█░█░█░░░▀▀█░█░░░█░█░█▀▄░█▀▀'.yellow
    );
    console.log(
      '          ░▀▀░░▀▀▀░▀░▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░░░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀▀'.yellow
    );
    console.log(
      '              ░█▀▀░█▀█░█░░░█▀▀░█░█░█░░░█▀█░▀█▀░█▀█░█▀▄'.yellow
    );
    console.log(
      '              ░█░░░█▀█░█░░░█░░░█░█░█░░░█▀█░░█░░█░█░█▀▄'.yellow
    );
    console.log(
      '              ░▀▀▀░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░░▀░░▀▀▀░▀░▀'.yellow
    );
    console.log(
      '\nWelcome! This simple calculator will keep track of your bowling score.'
        .cyan.bold.underline
    );
    console.log(
      '\nInput rolls and your score will be printed at the end of the game.'
        .cyan
    );
  }
}

module.exports = Application;
const app = new Application();
app.run();
