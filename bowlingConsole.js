const BowlingGame = require('./bowlingGame.js')
bowling = new BowlingGame();
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  function bowlingScorecard(){
    return new Promise((resolve) => {
      rl.question(`enter command > `,(answer) => {
        if (answer === 'get score'){
          console.log(bowling.bowlingScore.getScorecard())
        }
        else if(answer === 'total') {
          console.log(bowling.bowlingScore.getTotalScore())
        }
        else if (Number.isInteger(parseInt(answer))){
          const answerInteger = parseInt(answer)
          console.log(bowling.roll(answerInteger))
          }
        else {
          console.log("I did not recognise that input.")
        }
        resolve('Success');
      });
    });
  }
  
  async function run() {
      console.log("Welcome to the bowling game")
      console.log("Commands are as follows:")
      console.log("'get score' => shows current scorecard")
      console.log("'total' => shows total score so far")
      console.log("otherwise enter a number to represent how many pins you knocked down")
      while (true) {
        await bowlingScorecard();
        console.log(`Frame: ${bowling.getFrame()}. Turn: ${bowling.getTurn()}`);
      }
  }
  
  run()
