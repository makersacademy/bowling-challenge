const Frame = require('./frame');
const ScoreCard = require('./scorecard');

const scorecard = new ScoreCard(Frame);
const frame = new Frame;

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Do ctrl c to exit
console.log("Welcome to the Ten Pin Bowling Game")
const rollprompt = () => {
    rl.question('Enter Roll> ', (input) => {
      getInput(input)
      _rollResponse()
      rollprompt() 
    });
};
rollprompt()

const _rollResponse = () => {
  console.log(`The bowling game score is now ...`) 
}

const getInput = (input) => {
  frame.enterFirstRollScore(input, scorecard);
};