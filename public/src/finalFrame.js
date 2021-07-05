/* eslint-disable no-unused-vars */

const Frame = require('./frame');

class FinalFrame extends Frame {
  setRollThree(score) {
    if (this.getScore() < 10) { throw new Error(FinalFrame.NO_MORE_ROLLS()); }

    this.rollThree = score;
  }

  getScore() {
    const rollOne = this.rollOne ? this.rollOne : 0;
    const rollTwo = this.rollTwo ? this.rollTwo : 0;
    const rollThree = this.rollThree ? this.rollThree : 0;

    return rollOne + rollTwo + rollThree;
  }

  static NO_MORE_ROLLS() {
    return 'Player does not have access to a third roll in this game';
  }
}

// module.exports = FinalFrame;
