const prompt = require('prompt-sync')({sigint: true});
const BowlingScoreboard = require("./bowlingScoreboard");
const BowlingScorecard = require("./bowlingScorecard");
const InputValidation = require("./inputValidation");

const validation = new InputValidation();
const scoreboard = new BowlingScoreboard();
const board = scoreboard.getScoreboard();
const scorecard = new BowlingScorecard(board);

class BowlingGame {
  constructor(){
    this._userInput = 0;
    this._pinsDown = 0;
    this._error = null;
  }

  run() {
    // 1th frame to 9th frame
    do {
      this.throw();
    } while (scoreboard.getFrame() < 9)
    
    // 10th frame 
    this.throw();
    this.throw();

      // checking whether there's been a strike or spare before offering to throw for the third time
    if (board[scoreboard.getFrame()][0] + board[scoreboard.getFrame()][1] >= 10) {
        this.throw();
    }

    // calculating and displaying score
    scorecard.calculateScore();
    console.log(`You scored ${scorecard.getScore()} points.`);
  }

  throw() {
    this.getInput();
    this.validateInput();
    this._pinsDown = this._userInput;
    this.confirmInput();
    scoreboard.update(this._pinsDown)
  }
  
  getInput(){
    this._userInput = parseInt(prompt(`Frame ${scoreboard.getFrame() + 1}, roll ${scoreboard.getRoll() + 1}: How many pins did you knock down? `));
  } 
  
  validateInput() {
    do {
      validation.validateInput(this._userInput, scoreboard)
      this._error = validation.getError();
      if (this._error) {
        this._userInput = parseInt(prompt(this._error));
      } else {
        this._error = null;
      }
    } while (this._error)
  }

  confirmInput(){
    const strike = this._pinsDown === 10;
    const spare = (board[scoreboard.getFrame()][0] + this._pinsDown === 10) && (scoreboard.getRoll() === 1);
    if (strike) {
      console.log("Congratulations! Strike!")
    } else if (spare) {
      console.log("Congratulations! Spare!")
    } else if (this._pinsDown == 1) {
      console.log(`You knocked down ${this._pinsDown} pin.`)
    } else {
      console.log(`You knocked down ${this._pinsDown} pins.`);
    }
  }
}

module.exports = BowlingGame;


const game = new BowlingGame;
game.run();