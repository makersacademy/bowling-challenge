const readline = require('readline');
const Rules = require('../lib/rules')
const Score = require('../lib/score.js')
const Scorecard = require('../lib/scorecard.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const rules = new Rules();
const scorecard = new Scorecard();

const getRoll = (query = "Input roll: ") => {
  return new Promise(resolve =>  rl.question(query, answer => {
    resolve(answer);
  }));
}

const main = async() => {
  while (scorecard.framesArray.length < rules.maxFrames) {
    let result = await getRoll();
    scorecard.addRoll(parseInt(result));
    console.log(scorecard);
  }
  rl.close();
  const score = new Score(scorecard);
  console.log(`Your score: ${score.calculateScore()}`);
}
  
main();
