let readlineSync = require("readline-sync");
const Scorecard = require("./scorecard");
const Frame = require("./frame");

const newScorecard = new Scorecard();

const optionsMessage = (pins) => {
  return `Knocked down ${pins} pins. Scorebard:\n${newScorecard.board()}`;
};

let loop = true;

console.log("------------------\nWELCOME TO BOWLING\n------------------");
console.log(
  "Enter the number of pins knocked down with each bowl below.\nLeave input blank and press enter to exit.\n"
);
while (loop == true) {
  let command = readlineSync.question("Pins knocked down: ");
  if (command == "") {
    loop = false;
    console.log("Goodbye!");
  } else {
    newScorecard.addBowl(Number(command));
    console.log(`Bowls: ${newScorecard.bowls}`);
    console.log(`Scoreboard:\n${newScorecard.board()}\n`);
  }
}
