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
          if(bowling.roll(answerInteger) === "Invalid input") {
            console.log("Invalid input")
          }
          else {console.log(`You bowled a ${answerInteger}`)}
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
      while (true) {
        await bowlingScorecard();
        console.log(`Frame: ${bowling.getFrame()}. Turn: ${bowling.getTurn()}`);
      }
  }
  
  run()
