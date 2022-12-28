// const Scorecard = require('./scorecard');

class Frame {
  constructor() {
    this.frameScores = [];
  }

  playFrame(firstScore, secondScore) {
    if (firstScore < 0 || firstScore > 10 || secondScore < 0 || secondScore > 10) throw new Error('Please enter numbers between 0 to 10');
    if (firstScore + secondScore > 10) throw new Error('Total score for a frame must not exceed 10');
    this.frameScores.push(firstScore);
    this.frameScores.push(secondScore);
  }

  getFrameScores() {
    return this.frameScores;
  }

}

module.exports = Frame;
