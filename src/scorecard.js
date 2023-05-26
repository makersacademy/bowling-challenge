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
    return this.frames.map((frame) => frame.frameScore())
    .reduce((sum, num) => {
      return sum += num;
    }, 0)
  }
};

module.exports = Scorecard;