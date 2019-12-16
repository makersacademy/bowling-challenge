/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// const Frame = require('./frame');

class FinalFrame extends Frame {
  setRollTwo(score) {
    if (score < 0 || score > 10) { throw new Error(FinalFrame.INVALID_SCORE()); }
    if (this.getRollOne() < 10 && score + this.getRollOne() > 10) {
      throw new Error(FinalFrame.INVALID_SCORE());
    }

    this.rollTwo = score;
  }

  setRollThree(score) {
    if (score < 0 || score > 10) { throw new Error(FinalFrame.INVALID_SCORE()); }
    if (this.getScore() < 10) { throw new Error(FinalFrame.NO_MORE_ROLLS()); }
    if(!Frame.numbers().includes(score)) { throw new Error(FinalFrame.INVALID_SCORE()); }
    if (this.getRollOne() === 10 && this.getRollTwo() < 10 && score + this.getRollTwo() > 10) {
      throw new Error(FinalFrame.INVALID_SCORE());
    }

    this.rollThree = score;
  }

  getRollThree() {
    return this.rollThree;
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
