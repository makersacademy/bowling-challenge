const Frame = require('./frame');

class Scorecard {
  constructor() {
    this.frames = [];
  }

  addFrame(frame) {
    this.frames.push(frame);
  }
}

module.exports = Scorecard;
