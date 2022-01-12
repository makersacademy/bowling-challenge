const readline = require("readline");
const BowlingGame = require("./BowlingGame");

const game = new BowlingGame();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const gameCLI = function () {
  rl;
  rl.question("Enter command > ", function (line) {
    switch (true) {
      case line >= 0 && line <= 10:
        game.roll(line);
        console.log(`added roll #${game.rollList.length}`); // keep user updated of how many rolls he entered
        break;
      case line < 0 || line > 10 || line !== "my rolls" || line !== "score":
        console.log("sorry, enter a valid roll or command");
        break;
      case line === "my rolls":
        console.log(game.rollList);
        break;
      case line === "score":
        console.log(game.getFinalScore());
        console.log(game.sum);
        break;
    }
    gameCLI();
  });
};
gameCLI();
