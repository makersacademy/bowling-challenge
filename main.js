const Scorecard = require("./scorecard");
const UserInterface = require("./userInterface");

const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");


const mainFunction = async () => {
  const scorecard = new Scorecard();
  const readlineInterface = readline.createInterface({ input, output });
  const userInterface = new UserInterface(scorecard, readlineInterface);
  while (!userInterface.gameIsFinished()) {
    await userInterface.showGameStateInfo();
    await userInterface.addRollToScorecard();
  }
  await userInterface.showGameStateInfo();
  process.exit();
};

mainFunction();
