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

  returnScore = () => {
    return this.totalScore;
  };
}

module.exports = {
  Game,
  Frame,
};
