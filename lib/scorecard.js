const Frame = require('./frame')
const readline = require('readline')

const MAX_ROUNDS = 10
const MAX_ROLL = 10
class Scorecard {
  constructor () {
    this.allFrames = [];
    this.frame = 0;
  };

  async getRolls () {
    let roll1 = 0
    let roll2 = 0
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    roll1 = await new Promise(resolve => {
      rl.question("Enter the score for the first roll: ", resolve);
    });
    if (parseInt(roll1) < MAX_ROLL) {
      roll2 = await new Promise(resolve => {
        rl.question("Enter the score for the second roll: ", resolve);
      });
    }    
    rl.close()
    return new Frame(parseInt(roll1), parseInt(roll2));
  }

  async getSpareBonusRoll () {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    let roll1 = await new Promise(resolve => {
      rl.question(`Enter the score for your bonus roll: `, resolve);
    });
    rl.close()
    this.checkRollValidity(roll1);
    return new Frame(parseInt(roll1));
  }

  getTotalScore () {
    let total = 0;
    for (const frame of this.allFrames) {
      total += frame.sum();
    }
    return total;
  }

  _totalScoreMessage () {
    console.log(`You have added ${this.frame + 1} frame(s).\nThe current total score = ${this.getTotalScore()}`);
  }

  calculateStrikeBonus () {
    this.allFrames[this.frame - 1].setBonus(this.allFrames[this.frame].sum());
  }

  calculateSpareBonus () {
    this.allFrames[this.frame - 1].setBonus(this.allFrames[this.frame].roll1);
  }
  
  checkForBonus () {
    if (this.frame > 0 && this.frame < 9 && this.allFrames[this.frame - 1].isStrike()) {
      this.calculateStrikeBonus();
    } else if (this.frame > 0 && this.frame < 9 && this.allFrames[this.frame - 1].isSpare()) {
      this.calculateSpareBonus();
    };
  }

  async lastFrameStrikeBonus () {
    let lastFrameRoll = await this.getRolls();
    let sum = lastFrameRoll.roll1 + lastFrameRoll.roll2;
    this.allFrames[this.frame].setBonus(sum);
    this._totalScoreMessage();
  }

  async lastFrameSpareBonus () {
    let lastFrameRoll = await this.getSpareBonusRoll();
    this.allFrames[this.frame].setBonus(lastFrameRoll.roll1);
    this._totalScoreMessage();
  }

  async handleLastFrame () {
    if (this.allFrames[this.frame].isStrike()) {
      await this.lastFrameStrikeBonus();
    } else if (this.allFrames[this.frame].isSpare()) {
      await this.lastFrameSpareBonus();
    };
  }

  async run () {
    while (this.frame < MAX_ROUNDS-1) {
      let newFrame = await this.getRolls();
      this.allFrames.push(newFrame);
      this.checkForBonus();
      this._totalScoreMessage();
      this.frame++;
    };
    // We ran 9 frames, we can now handle the last one
    let newFrame = await this.getRolls();
    this.allFrames.push(newFrame);
    await this.handleLastFrame();
    console.log(this.allFrames)
    this._totalScoreMessage();
    this.frame++;

  }
}

module.exports = Scorecard;
