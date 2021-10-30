const Game = require("./game");

const game = new Game();

const frames = () => {
  let frame_nums = Array.from({ length: 10 }, (_, i) => i + 1);
  return frame_nums.map((x) => x.toString().padStart(3)).join("|");
};

const rolls = () => {
  let each_roll = game.rolls;
  let each_space = Array(20).fill(' ')
  let each_pin = each_roll.concat(each_space)
  each_pin.length = 20;
  return each_pin.map(x => x.toString()).join("|");
};


let rlSync = require("readline-sync");

for(let i = 0; i < 10; i++){
  let firstRoll = Number(rlSync.question("Enter your roll\n"));
  game.roll(firstRoll);
  console.log(frames())
  console.log(rolls())
}