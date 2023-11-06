const Scorecard = require("./scorecard");
const UserInterface = require("./userInterface");


const mainFunction = (async () => {
  const scorecard = new Scorecard();
  const userInterface = new UserInterface(scorecard);
  while (!userInterface.gameIsFinished()) {
    await userInterface.showGameStateInfo();
    await userInterface.addRollToScorecard();
  }
  await userInterface.showGameStateInfo();
  process.exit();
});

mainFunction();




