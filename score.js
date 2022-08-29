const frame = require('./frame');

class Score {
  constructor() {
    this.frames = [];
  };
  
  add(frame) {
    this.frames.push(frame);
    return this.frames;
  };
};

module.exports = Score;