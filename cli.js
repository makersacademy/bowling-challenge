let readlineSync = require("readline-sync");
const Game = require("./game");

const myGame = new Game();

const optionsMessage = (pins) => {
  return `Knocked down ${pins} pins. Scorebard:\n${newScorecard.board()}`;
};

let loop = true;

console.log("------------------\nWELCOME TO BOWLING\n------------------");
console.log(
  "Enter the number of pins knocked down with each bowl below.\nLeave input blank and press enter to exit.\n"
);
while (loop == true) {
  let command = readlineSync.question("Enter number: ");
  if (command == "") {
    loop = false;
    console.log(`\nFINAL SCORE: ${myGame.getScore()}\nGoodbye!`);
  } else {
    response = myGame.rollBowl(Number(command));
    console.log(response);
    console.log(`You have ${myGame.bowlsLeft} more rolls remaining.`);
    console.log(`Scoreboard:\n${myGame.getBoard()}\n`);
  }
}
