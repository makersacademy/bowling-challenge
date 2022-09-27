const readline = require("readline/promises");

class UserInterface {
  constructor(Frame, scoringTable, formatter) {
    this.frame = Frame;
    this.scoringTable = scoringTable;
    this.formatter = formatter;
    this.rl = readline.createInterface(process.stdin, process.stdout);
  }

  async run() {
    let frame;
    for (let i = 1; i <= 10; i++) {
      frame = await this.getOneFrame(i);
      this.scoringTable.addFrame(frame);
      if (i < 10) this.showCurrentScore(frame);
    }
    this.bonusFrame(frame);
    this.showAllScores();
    this.rl.close();
  }

  bonusFrame(frame) {
    // BUG : frame 10 doesn't ask for bonus rolls if spare / strike
    console.log(frame.isSpare());
    if (frame.isStrike() || frame.isSpare()) {
      this.getOneFrame("bonus").then((frame) => {
        this.scoringTable.addBonusFrame(frame);
      });
    }
  }

  async getOneFrame(number) {
    console.log(`Frame ${number}`);
    const frame = new this.frame(number);
    let score = await this.getScore("Roll 1: ");
    frame.setRollOne(score);
    if (frame.isStrike()) return frame;
    else score = await this.getScore("Roll 2: ");
    frame.setRollTwo(score);
    return frame;
  }

  async getScore(message) {
    let score = await this.rl.question(message);
    return parseInt(score);
  }

  showAllScores() {
    console.log(this.formatter.showAll());
  }

  showCurrentScore(frame) {
    console.log(this.formatter.showFrameAndTotal(frame));
  }
}

module.exports = UserInterface;
