const Frame = require('./frame');
const ScoreCard = require('./scoreCard');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.scoreCard = new ScoreCard;
    this.frameCount = 0;
  }

  startGame() {
    this.newFrame();
  }

  newFrame() {
    this.frameCount += 1;
    this.frame = new Frame;
    this.runFrame();
  }

  runFrame() {
    this.frame.startRoll(this.pinsRequest());
    if (this.frame.bonus === 'strike') {
      this.frame.frameScores.push(0);
    } else {
      this.frame.startRoll(pinsRequest());
    }
    this.finishFrame();
  }

  finishFrame() {
    this.frame.frameScores.push(this.frame.bonus);
    this.scoreCard.frameResult(this.frame.frameScores);
    this.scoreCard.printScores();
    this.frameCount < 10 ? this.newFrame() : this.bonus(this.frame.bonus, this.frameCount);
  }

  finishGame() {
    if (this.scoreCard.totalScore === 0) {
      console.log("GUTTER GAME");
    } else if (this.scoreCard.totalScore === 300) {
      console.log("PERFECT GAME");
    }
    console.log(this.scoreCard.printScores());
  }

  pinsRequest() {
    return 10
  }
  // pinsRequest() {
  //   rl.question("How many pins did you knock down? >", (pins) => {
  //     return pins
  //   }); // needs a callback function to work - should cli be in sererat file??
  // }

  bonus(bonusType, frameRound) {
    if (bonusType == 'strike' && frameRound == 10) {
      this.newFrame();
    } else if (bonusType == 'strike' && frameRound == 11) {
      this.newFrame();
    } else if (bonusType == 'spare' && frameRound == 10) {
      this.newFrame();
    } else {
      this.finishGame();
    }
  }

}

game = new Game();
game.startGame();

module.exports = Game;