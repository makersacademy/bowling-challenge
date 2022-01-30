const Scorecard = require('./Scorecard');
const readline = require('readline');

class Game {
  constructor() {
    this.scorecard = new Scorecard();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  letsGoBowling() {
    let frameScore = 0
    this.rl.question(`Frame ${this.scorecard.frameNumber() + 1}. How many pins did you knock down on roll 1? `, (answer1) => {
      switch(answer1) {
        case '10':
          this.strikeDisplay();
          this.enterRoll(answer1);
          this.nextFrame();
          break;
        default:
          frameScore += parseInt(answer1);
          this.enterRoll(answer1);
          this.rl.question('And how many did you knock down on roll 2? ', (answer2) => {
            frameScore += parseInt(answer2);
            if(frameScore === 10) {
              console.log('Woo, a spare!')
              this.enterRoll(answer2);
              this.nextFrame();
            } else {
              this.enterRoll(answer2);
              let score = this.scorecard.calculateScore();
              console.log(`Your current score is ${score}`);
              this.nextFrame();
            }
          })
          break;
        }
    })
  }

  frameTen() {
    let frameScore = 0
    this.rl.question(`Last frame! How many pins did you knock down on roll 1? `, (answer1) => {
      switch(answer1) {
        case '10':
          this.strikeDisplay();
          this.enterRoll(answer1);
          this.bonusRoll(2);
          break;
        default:
          frameScore += parseInt(answer1);
          this.enterRoll(answer1);
          this.rl.question('And how many did you knock down on roll 2? ', (answer2) => {
            frameScore += parseInt(answer2)
            if(frameScore === 10) {
              console.log('Woo, a spare!')
              this.enterRoll(answer2);
              this.bonusRoll(1);
            } else {
              this.enterRoll(answer2);
              this.endOfGame();
            }
          })
          break;
        }
    })
  }

  nextFrame() {
    if (this.lastFrame()) {
      this.frameTen();
    } else {
      this.letsGoBowling();
    };
  }

  endOfGame() {
    let score = this.scorecard.calculateScore();
    console.log(`Your final score is ${score}!!`)
    this.gameOverDisplay();
    this.rl.close();
  }
  
  lastFrame() {
    return this.scorecard.frameNumber() + 1 === 10;
  }
  
  bonusRoll(howManyTimes) {
    if(howManyTimes === 2) {
      this.rl.question(`How many pins did you knock down on the bonus roll? `, (answer) => {
        this.enterRoll(answer);
        this.bonusRoll(1)
      })
    } else {
      this.rl.question('How many pins did you knock down on your bonus roll? ', (answer) => {
        this.enterRoll(answer);
        this.endOfGame();
      })
    }
  }
  
  enterRoll(answer) {
    this.scorecard.roll(parseInt(answer));
  }
  
  strikeDisplay() {
    console.log(`   _____ _        _ _        _ \r\n  \/ ____| |      (_) |      | |\r\n | (___ | |_ _ __ _| | _____| |\r\n  \\___ \\| __| \'__| | |\/ \/ _ \\ |\r\n  ____) | |_| |  | |   <  __\/_|\r\n |_____\/ \\__|_|  |_|_|\\_\\___(_)\r\n`);
  }
  
  titleDisplay() {
    console.log("  _          _   _        _____         ____                _ _             _ \r\n | |        | | ( )      \/ ____|       |  _ \\              | (_)           | |\r\n | |     ___| |_|\/ ___  | |  __  ___   | |_) | _____      _| |_ _ __   __ _| |\r\n | |    \/ _ \\ __| \/ __| | | |_ |\/ _ \\  |  _ < \/ _ \\ \\ \/\\ \/ \/ | | \'_ \\ \/ _` | |\r\n | |___|  __\/ |_  \\__ \\ | |__| | (_) | | |_) | (_) \\ V  V \/| | | | | | (_| |_|\r\n |______\\___|\\__| |___\/  \\_____|\\___\/  |____\/ \\___\/ \\_\/\\_\/ |_|_|_| |_|\\__, (_)\r\n                                                                       __\/ |  \r\n                                                                      |___\/   ");
    console.log(`         .-.\r\n      .-.\\ \/    .-.\r\n      \\ \/|=|    \\ \/\r\n      |=|   \\   |=|\r\n     \/   \\ ---.\/   \\\r\n     |   \/ ..  \\   |\r\n     |  |#  \'   |  |\r\n      \'._\\     \/_.\'\r\n          \'---\'\r\n`);
  }

  gameOverDisplay() {
    console.log(`   _____                                            _ \r\n  \/ ____|                                          | |\r\n | |  __  __ _ _ __ ___   ___    _____   _____ _ __| |\r\n | | |_ |\/ _\` | \'_ \` _ \\ \/ _ \\  \/ _ \\ \\ \/ \/ _ \\ \'__| |\r\n | |__| | (_| | | | | | |  __\/ | (_) \\ V \/  __\/ |  |_|\r\n  \\_____|\\__,_|_| |_| |_|\\___|  \\___\/ \\_\/ \\___|_|  (_)\r\n                                                      \r\n                                                      `);
  }
}

module.exports = Game