const Frame = require('./frame')
const readline = require('readline')

class Scorecard {
  constructor () {
    this.allFrames = [];
    this.frame = 0;
  };

  async getRolls () {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    this.roll1 = await new Promise(resolve => {
      rl.question(`Enter the score for roll 1: `, resolve);
    });
    this.roll2 = await new Promise(resolve => {
      rl.question(`Enter the score for roll 2: `, resolve);
    });
    rl.close()
    return new Frame(parseInt(this.roll1), parseInt(this.roll2));
  }

  getTotalScore () {
    let total = 0;
    for (const frame of this.allFrames) {
      console.log(frame);
      console.log(frame.sum());
      total += frame.sum();
    };
    return total;
  }

  _totalScoreMessage () {
    console.log(`You have added ${this.frame + 1} frame(s).\nThe current total score = ${this.getTotalScore()}`);
  }

  calculateStrikeBonus () {
    this.allFrames[this.frame - 1].setBonus(this.allFrames[this.frame].sum());
    console.log("get strike bonus", this.allFrames[this.frame - 1].getBonus());
  }

  calculateSpareBonus () {
    this.allFrames[this.frame - 1].setBonus(this.allFrames[this.frame].roll1);
    console.log("spare roll1", this.allFrames[this.frame].roll1);
    console.log("get spare bonus", this.allFrames[this.frame - 1].getBonus());
  }
  
  checkForBonus () {
    if (this.frame > 0 && this.frame < 9 && this.allFrames[this.frame - 1].isStrike()) {
      this.calculateStrikeBonus();
    } else if (this.frame > 0 && this.frame < 9 && this.allFrames[this.frame - 1].isSpare()) {
      this.calculateSpareBonus();
    };
  }

  async LastFrameStrikeBonus () {
    let lastFrameRoll = await this.getRolls();
    let sum = lastFrameRoll.roll1 + lastFrameRoll.roll2;
    this.allFrames[this.frame - 1].setBonus(sum);
    this._totalScoreMessage();
  }

  async LastFrameSpareBonus () {
    let lastFrameRoll = await this.getRolls();
    this.allFrames[this.frame - 1].setBonus(lastFrameRoll.roll1);
    this._totalScoreMessage();
  }

  handleLastFrame () {
    if (this.allFrames[this.frame].isStrike()) {
      this.LastFrameStrikeBonus();
    } else if (this.allFrames[this.frame].isSpare()) {
      this.LastFrameSpareBonus();
    };
  }

  async run () {
    while (this.frame < 10) {
      let newFrame = await this.getRolls();
      this.allFrames.push(newFrame);
      if (this.frame === 9) {
        this.handleLastFrame();
      }
      this.checkForBonus();
      this._totalScoreMessage();
      this.frame++;
    };
  }
}

module.exports = Scorecard;
