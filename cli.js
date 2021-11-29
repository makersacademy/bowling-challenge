const readlineSync = require('readline-sync');
const Bowling = require('./bowling');

let bowling = new Bowling;

console.log(`Welcome to Bowling Score Tracker 3000, enter how many pins you have knocked down, and I will work out your score.`);

while (bowling.getFrame() < 10) {
  let command = readlineSync.question("Enter roll > ");
  if(command != "quit") {
    bowling.Roll(command)
    if(bowling.getRoll() === 1) {
      console.log(`Score so far: ${bowling.getTotalScore}.`)
    } else {
      console.log("Awaiting 2nd roll")
    }
  } else if (command === "quit") {
    break;
  }
}; 