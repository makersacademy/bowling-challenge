const Game = require("./game");

const game = new Game();

const frames = () => {
  let frame_nums = Array.from({ length: 10 }, (_, i) => i + 1);
  return frame_nums.map((x) => x.toString().padStart(5)).join("|");
};

const rolls = () => {
  let theRolls = [];
  game.frames.map((x) =>
    theRolls.push(x.first_roll, x.second_roll)
  );
  let each_space = Array(20).fill(" ");
  let each_pin = theRolls.concat(each_space);
  each_pin.length = 20;
  return each_pin.map((x) => x.toString().padStart(2)).join("|");
};

const scores = () => {
  let theScores = [];
  game.frames.map((x) => theScores.push(x.score));
  let each_space = Array(10).fill(" ");
  let each_pin = theScores.concat(each_space);
  each_pin.length = 10;
  return each_pin.map((x) => x.toString().padStart(5)).join("|");
};

const scorecard = () => {
  console.log(`${"\n FRAMES:".padStart(8)}` + frames());
  console.log(`${"ROLLS:".padStart(8)}` + rolls());
  console.log(`${"SCORES:".padStart(8)}` + scores() + "\n");
};

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
  scorecard();
}
let rollOne = readlineQ("First roll\n");
let rollTwo = readlineQ("Second roll\n");
game.finalRoll(rollOne, rollTwo);
scorecard();
if (rollOne === 10 || rollOne + rollTwo === 10) {
  let finalRoll = readlineQ("Final roll\n");
  game.bonusRoll(finalRoll);
}

console.log("Total Score = " + game.fetchScore());
