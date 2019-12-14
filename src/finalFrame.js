const Frame = require('./frame');

class FinalFrame extends Frame {
  constructor() {
    super();
    this.rollThree = 0;
  }

  setRollThree(score) {
    this.rollThree = score;
  }

  getScore() {
    return this.rollOne + this.rollTwo + this.rollThree;
  }
}

module.exports = FinalFrame;
