const readline = require("readline/promises");

class UserInterface {
  constructor(Frame, scoringTable, formatter) {
    this.Frame = Frame;
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
    if (frame.isStrike() || frame.isSpare) {
      await this.getBonusFrame(frame);
    }
    this.showAllScores();
    this.rl.close();
  }

  async getBonusFrame(frame) {
    const bonusFrame = new this.Frame("BONUS");
    bonusFrame.setRollOne(await this.getRoll("Bonus Roll 1: "));
    if (frame.isStrike()) {
      bonusFrame.setRollTwo(await this.getRoll("Bonus Roll 2: "));
    }
    this.scoringTable.addBonusFrame(bonusFrame);
  }

  async getOneFrame(number) {
    console.log(`Frame ${number}`);
    const frame = new this.Frame(number);
    let score = await this.getRoll("Roll 1: ");
    frame.setRollOne(score);
    if (frame.isStrike()) return frame;
    else score = await this.getRoll("Roll 2: ");
    frame.setRollTwo(score);
    return frame;
  }

  async getRoll(message) {
    let score = await this.rl.question(message);
    const validInputs = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
    ];
    while (!validInputs.includes(score)) {
      score = await this.rl.question("Not a valid score.Try again\n" + message);
    }
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
