const Frame = require('./frame');

class FinalFrame extends Frame {
  setRollThree(score) {
    this.rollThree = score;
  }

  getFrameScore() {
    return this.rollOne + this.rollTwo + this.rollThree;
  }
}

module.exports = FinalFrame;