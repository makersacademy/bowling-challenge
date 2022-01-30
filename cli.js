const Scorecard = require('./Scorecard');
const scorecard = new Scorecard();
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function letsGoBowling() {
  frameScore = 0
  rl.question(`Frame ${scorecard.frameNumber() + 1}. How many pins did you knock down on your first roll? `, (answer1) => {
    switch(answer1) {
      case '10':
        console.log(`Nice!`)
        scorecard.roll(parseInt(answer1));
        letsGoBowling();
        break;
      default:
        frameScore += parseInt(answer1);
        scorecard.roll(parseInt(answer1));
        rl.question('And how many did you knock down on your second roll? ', (answer2) => {
          frameScore += parseInt(answer2)
          if(frameScore === 10) {
            console.log('Woo, a spare!')
            scorecard.roll(parseInt(answer2));
            letsGoBowling();
          } else {
            scorecard.roll(parseInt(answer2));
            score = scorecard.calculateScore();
            console.log(`Your current score is ${score}`)
            letsGoBowling();
          }
        })
        break;
      }
  })
}

letsGoBowling();