const UserInterface = require('./lib/userInterface');
const Frame = require('./lib/frame');
const Game = require('./lib/game');

class Application {
  constructor() {
    this.game = new Game();
    this.UI = new UserInterface(this.game);
  }

  run() {
    for (let i = 0; i < 10; i++) {
      console.log(`You are on frame ${this.UI.game.frameCount}`);
      let rollOne = this.UI.getRollOne();
      let rollTwo = this.UI.getRollTwo();
      let rollThree = this.UI.getRollThree();
      let frame = new Frame(rollOne, rollTwo, rollThree);
      this.UI.game.add(frame);
    }
    console.log(`Your total score is: ${this.UI.game.calculateGrandTotal()}`);
  }
}

module.exports = Application;
const app = new Application();
app.run();
