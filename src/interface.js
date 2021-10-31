const Game = require("./game");
const Scorecard = require("./scorecard");

const game = new Game();
const scorecard = new Scorecard(game);


const readlineQ = (text) => {
  return Number(rlSync.question(text));
}

let rlSync = require("readline-sync");

for (let i = 0; i < 9; i++) {
  let rollOne = readlineQ("First roll\n");
  let rollTwo =
    rollOne === 10
      ? "x"
      : readlineQ("Second roll\n");
  game.roll(rollOne, rollTwo);
  scorecard.card();
}
let rollOne = readlineQ("First roll\n");
let rollTwo = readlineQ("Second roll\n");
game.finalRoll(rollOne, rollTwo);
scorecard.card();
if (rollOne === 10 || rollOne + rollTwo === 10) {
  let finalRoll = readlineQ("Final roll\n");
  game.bonusRoll(finalRoll);
}

console.log("Total Score = " + game.fetchScore());
