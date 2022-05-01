const Frame = require("./frame");

class Game {
  constructor() {
    this.frames = [];
  }

  addPointsScored = (num) => {
    this.addFrame();
    this.frames[this.frames.length - 1].knocked_down_pins(num);
  };

  addFrame = (frame = new Frame()) => {
    if (this.frames.length === 0) this.frames.push(frame);
    else if (this.frames[this.frames.length - 1].isComplete())
      this.frames.push(frame);
  };

  calculateScore = () => {
    this.totalScore = 0;
    this.frames.forEach((frame) => (this.totalScore += frame.addScore()));
  };

  addBonusRolls = () => {
    this.frames.forEach((frame, index) => this.frames[index].addBonusRolls());
  };

  addBonusPoints = () => {
    this.frames.forEach((frame, index) => {
      if (this.frames[index].bonusPoints == 1) {
        this.frames[index].knocked_down_pins(this.frames[index + 1].pinsLog[0]);
      } else if (this.frames[index].bonusPoints == 2) {
        this.frames[index].knocked_down_pins(this.frames[index + 1].pinsLog[0]);
        this.frames[index].knocked_down_pins(this.frames[index + 1].pinsLog[1]);
      }
    });
  };

  returnScore = () => {
    return this.totalScore;
  };
}

module.exports = {
  Game,
  Frame,
};
