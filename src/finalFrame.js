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
    const rollOne = this.rollOne ? this.rollOne : 0;
    const rollTwo = this.rollTwo ? this.rollTwo : 0;
    const rollThree = this.rollThree ? this.rollThree : 0;

    return this.rollOne + this.rollTwo + this.rollThree;
  }
}

module.exports = FinalFrame;
