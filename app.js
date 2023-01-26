const UserInterface = require('./lib/userInterface');
const Frame = require('./lib/frame');
const Game = require('./lib/game');
const UI = new UserInterface();
const game = new Game();

let frameCount = 1;
for (let i = 0; i < 9; i++) {
  console.log(`You are on frame ${frameCount}`);
  let rollOne = UI.getRollOne();
  let rollTwo = UI.getRollTwo();
  let frame = new Frame(rollOne, rollTwo, 0);
  game.add(frame);
  frameCount++;
}
console.log(`You are on frame ${frameCount}`);
let rollOne = UI.getRollOne();
let rollTwo = UI.getRollTwo();
let rollThree = UI.getRollThree();
let frame = new Frame(rollOne, rollTwo, rollThree);
game.add(frame);
console.log(`Your total score is: ${game.calculateGrandTotal()}`);
