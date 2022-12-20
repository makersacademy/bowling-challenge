const readlinePromises = require('node:readline/promises');
const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Enter number of pins knocked down this roll:\n'
});

const Frame = require('./frame');
const Game = require('./game');

const frame1 = new Frame;

rl.prompt();

rl.on('line', (line) => {
 
  rl.prompt();

  frame1.addRoll(parseInt(line));

  if (frame1.rolls.length === 2 || frame1.rolls[0] === 10) {
    rl.close();
  }

})

rl.on('close', () => {
  console.log(frame1.rolls);
})





