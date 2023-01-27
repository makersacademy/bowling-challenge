const UserInterface = require('./lib/userInterface');
const Frame = require('./lib/frame');
const Game = require('./lib/game');
const game = new Game();
const UI = new UserInterface(game);

for (let i = 0; i < 10; i++) {
  console.log(`You are on frame ${UI.game.frameCount}`);
  let rollOne = UI.getRollOne();
  let rollTwo = UI.getRollTwo();
  let rollThree = UI.getRollThree();
  let frame = new Frame(rollOne, rollTwo, rollThree);
  UI.game.add(frame);
}
console.log(`Your total score is: ${UI.game.calculateGrandTotal()}`);
