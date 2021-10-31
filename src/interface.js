// const Game = require("./game");

// const game = new Game();

// const frames = () => {
//   let frame_nums = Array.from({ length: 10 }, (_, i) => i + 1);
//   return frame_nums.map((x) => x.toString().padStart(3)).join("|");
// };

// const rolls = () => {
//   console.log("Rolls length = " + game.visual_scores.length)
//   let each_roll = game.visual_scores;
//   let each_space = Array(20).fill(' ')
//   let each_pin = each_roll.concat(each_space)
//   each_pin.length = 20;
//   return each_pin.map(x => x.toString()).join("|");
// };


// let rlSync = require("readline-sync");

// for(let i = 0; i < 20; i++){
//   let firstRoll = Number(rlSync.question("Enter your roll\n"));

//   game.roll(firstRoll);
//   console.log(game.rollIndex)
//   console.log(frames())
//   console.log(rolls())
// }