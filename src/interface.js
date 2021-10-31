const Game = require("./game");

const game = new Game();

const frames = () => {
  let frame_nums = Array.from({ length: 10 }, (_, i) => i + 1);
  return frame_nums.map((x) => x.toString().padStart(3)).join("|");
};

const rolls = () => {
  let theRolls = [];
  let each_roll = game.frames.map(x => theRolls.push(x.first_roll, x.second_roll))
  let each_space = Array(20).fill(' ')
  let each_pin = theRolls.concat(each_space)
  each_pin.length = 20;
  return each_pin.map(x => x.toString()).join("|");
};


let rlSync = require("readline-sync");

for(let i = 0; i < 20; i++){
  let firstRoll = Number(rlSync.question("Enter your first roll\n"));
  let secondRoll = (firstRoll === 10) ? 'x' : Number(rlSync.question("Enter your second roll\n"));
  game.roll(firstRoll, secondRoll);
  console.log(frames())
  console.log(rolls())
}