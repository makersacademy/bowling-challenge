const Scorecard = require("./scorecard");
const UserInterface = require("./userInterface");


const mainFunction = (async () => {
  const scorecard = new Scorecard();
  const userInterface = new UserInterface(scorecard);
  try {
    await userInterface.tellMeTheScore();
  } catch(err) {
    console.log(`Error: ${err}`);
  } finally {
    userInterface.rl.close();
  }
  process.exit();
});

mainFunction();




