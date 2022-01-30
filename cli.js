const Scorecard = require('./Scorecard');
const scorecard = new Scorecard();
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function letsGoBowling() {
  frameScore = 0
  rl.question(`Frame ${scorecard.frameNumber() + 1}. How many pins did you knock down on roll 1? `, (answer1) => {
    switch(answer1) {
      case '10':
        console.log(`   _____ _        _ _        _ \r\n  \/ ____| |      (_) |      | |\r\n | (___ | |_ _ __ _| | _____| |\r\n  \\___ \\| __| \'__| | |\/ \/ _ \\ |\r\n  ____) | |_| |  | |   <  __\/_|\r\n |_____\/ \\__|_|  |_|_|\\_\\___(_)\r\n`);
        scorecard.roll(parseInt(answer1));
        letsGoBowling();
        break;
      default:
        frameScore += parseInt(answer1);
        scorecard.roll(parseInt(answer1));
        rl.question('And how many did you knock down on roll 2? ', (answer2) => {
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

console.log("  _          _   _        _____         ____                _ _             _ \r\n | |        | | ( )      \/ ____|       |  _ \\              | (_)           | |\r\n | |     ___| |_|\/ ___  | |  __  ___   | |_) | _____      _| |_ _ __   __ _| |\r\n | |    \/ _ \\ __| \/ __| | | |_ |\/ _ \\  |  _ < \/ _ \\ \\ \/\\ \/ \/ | | \'_ \\ \/ _` | |\r\n | |___|  __\/ |_  \\__ \\ | |__| | (_) | | |_) | (_) \\ V  V \/| | | | | | (_| |_|\r\n |______\\___|\\__| |___\/  \\_____|\\___\/  |____\/ \\___\/ \\_\/\\_\/ |_|_|_| |_|\\__, (_)\r\n                                                                       __\/ |  \r\n                                                                      |___\/   ");
console.log(`         .-.\r\n      .-.\\ \/    .-.\r\n      \\ \/|=|    \\ \/\r\n      |=|   \\   |=|\r\n     \/   \\ ---.\/   \\\r\n     |   \/ ..  \\   |\r\n     |  |#  \'   |  |\r\n      \'._\\     \/_.\'\r\n          \'---\'\r\n`);

letsGoBowling();