const ScoreCard = require("../lib/scorecard");
const readline = require('readline');

const scorecard = new ScoreCard()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// WIP - Need to read more about Promises and how they can be effectively used here

function bowlingGame() {
  return new Promise(resolve => {
    rl.question('Roll your bowling ball...', (answer) => {

    })
  })
}

async function run() {
    await bowlingGame();
}

run()