// const Scorecard = require('./scorecard');

class Frame {
  constructor() {
    this.frameScores = [];
  }

  rollOne(score) {
    if (score < 0 || score > 10) throw new Error('Please enter a number from 0 to 10');
    this.frameScores.push(score);
  }

  rollTwo(score) {
    if (score < 0 || score > 10) throw new Error('Please enter a number from 0 to 10');
    this.frameScores.push(score);
  }

  getFrameScores() {
    return this.frameScores;
  }

}

module.exports = Frame;