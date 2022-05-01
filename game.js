const Frame = require("./frame");

class Game {
  constructor() {
    this.frames = [];
    this.lastFrame = 10;
    this.bonusFrame = 11;
  }

  addPointsScored = (num) => {
    this.continueGame();
    this.addFrame();
    this.frames[this.frames.length - 1].knocked_down_pins(num);
    this.addBonusRolls();
  };

  continueGame = () => {
    if (this.frames.length === this.lastFrame) {
      if (
        this.frames[this.frames.length - 1].pinsLog.length === 2 &&
        this.frames[this.frames.length - 1].addScore() < 10
      ) {
        throw "The game has finished!";
      }
    }

    if (
      this.frames.length <= this.lastFrame ||
      (this.frames.length == this.bonusFrame &&
        this.frames[this.frames.length - 1].isAStrike()) ||
      (this.frames.length == this.bonusFrame &&
        this.frames[this.frames.length - 1].isASpare())
    ) {
      return;
    } else throw "The game has finished!";
  };

  addFrame = (frame = new Frame()) => {
    if (
      this.frames.length === 0 ||
      this.frames[this.frames.length - 1].isComplete()
    )
      this.frames.push(frame);
  };

  calculateScore = () => {
    this.totalScore = 0;
    this.frames.forEach((frame) => (this.totalScore += frame.addScore()));
  };

  addBonusRolls = () => {
    this.frames.forEach((frame, index) => this.frames[index].addBonusRolls());
    this.addBonusPoints();
  };

  addBonusPoints = () => {
    this.frames.forEach((frame, index) => {
      this.frames[index].resetBonusPinsLog();
      if (
        this.frames[index].bonusRolls == 1 &&
        typeof this.frames[index + 1] !== "undefined" &&
        index !== 9 &&
        index !== 10
      ) {
        this.frames[index].addBonusPoints(this.frames[index + 1].pinsLog[0]);
      } else if (
        this.frames[index].bonusRolls == 2 &&
        typeof this.frames[index + 1] !== "undefined" &&
        index !== 9 &&
        index !== 10
      ) {
        this.frames[index].addBonusPoints(this.frames[index + 1].pinsLog[0]);
        if (typeof this.frames[index + 1].pinsLog[1] !== "undefined") {
          this.frames[index].addBonusPoints(this.frames[index + 1].pinsLog[1]);
        } else if (
          typeof this.frames[index + 2] !== "undefined" &&
          typeof this.frames[index + 2].pinsLog[0] !== "undefined"
        ) {
          this.frames[index].addBonusPoints(this.frames[index + 2].pinsLog[0]);
        }
      }
    });
    this.calculateScore();
  };

  returnScore = () => {
    return this.totalScore;
  };
}

module.exports = {
  Game,
  Frame,
};
