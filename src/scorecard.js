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

};

module.exports = Scorecard;