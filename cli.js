const Scorecard = require('./scorecard'); 
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

scorecard = new Scorecard;

const recursiveAsyncReadLine = () => {
  rl.question(`How many pins did you roll in frame ${scorecard.frames.length + 1}? Please enter two numbers for your first and second rolls, separated by a comma e.g. 2,3 If you bowled a strike, simply enter 10.\n`, (answer) => {
  const rolls = answer.split(',');
  frame = rolls.map(roll => {
    return parseInt(roll); // turn string into number
  });
  scorecard.inputFrame(frame);
  if (scorecard.frames.length > 9) { 
    confirmOutcome(); 
    return rl.close();
  }
  console.log('Thank you. Your rolls have been added to your scorecard. Your final score will be calculated after all 10 frames have been entered.\n');
  recursiveAsyncReadLine();
});
}
recursiveAsyncReadLine();

const confirmOutcome = () => {
  if (scorecard.score() == 300) {
    console.log('You bowled a perfect game');
  }
  else if (scorecard.score() == 0) {
    console.log('You bowled a gutter game');
  }
  else {
    console.log(`You scored ${scorecard.score()}`);
  }
}
