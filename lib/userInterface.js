const rl = require("./rl");

class UserInterface {
  constructor(Frame, scoringTable, formatter) {
    this.Frame = Frame;
    this.scoringTable = scoringTable;
    this.formatter = formatter;
  }

  async run() {
    let frame;
    for (let i = 1; i <= 10; i++) {
      frame = await this.#getOneFrame(i);
      this.scoringTable.addFrame(frame);
      if (i < 10) this.#showCurrentScore(frame);
    }
    if (frame.isStrike() || frame.isSpare) {
      await this.#getBonusFrame(frame);
    }
    this.#showAllScores();
    rl.close();
  }

  async #getBonusFrame(frame) {
    const bonusFrame = new this.Frame("BONUS");
    bonusFrame.setRollOne(await this.#getRoll("Bonus Roll 1: "));
    if (frame.isStrike()) {
      bonusFrame.setRollTwo(await this.#getRoll("Bonus Roll 2: "));
    }
    this.scoringTable.addFrame(bonusFrame);
  }

  async #getOneFrame(number) {
    console.log(`Frame ${number}`);
    const frame = new this.Frame(number);
    frame.setRollOne(await this.#getRoll("Roll 1: "));
    if (frame.isStrike()) return frame;
    frame.setRollTwo(await this.#getRoll("Roll 2: "));
    return frame;
  }

  async #getRoll(message) {
    let score = await rl.question(message);
    while (!this.#isValid(score)) {
      score = await rl.question("Not a valid score.Try again\n" + message);
    }
    return parseInt(score);
  }

  #isValid(input) {
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
    return validInputs.includes(input) ? true : false;
  }

  #showAllScores() {
    console.log(this.formatter.showAll());
  }

  #showCurrentScore(frame) {
    console.log(this.formatter.showFrameAndTotal(frame));
  }
}

module.exports = UserInterface;
