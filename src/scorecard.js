const Frame = require('./frame');

class Scorecard {
  constructor() {
    this.frames = [];
  }

  addFrame() {
    const rolls = Array.from(arguments);
    const frame = new Frame(rolls);
    this.frames.push(frame);
  }

  calculateScore() {
    if (this.frames.length === 0) {
      return 0;
    } else if (this.frames.at(-1).spare() || this.frames.at(-1).strike()) {
      return null
    }

    return this.#sumFrameScores()
  }

  #sumFrameScores() {
    return this.frames.map((frame) => frame.getFrameScore())
    .reduce((sum, num) => {
      return sum += num;
    }, 0)
  }
};

module.exports = Scorecard;