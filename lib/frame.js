// const Scorecard = require('./scorecard');

class Frame {
  constructor() {
    this.frameScores = [];
    this.bonusRollScores = [];
  }

  playFrame(firstScore, secondScore) {
    if (firstScore < 0 || firstScore > 10 || secondScore < 0 || secondScore > 10) throw new Error('Please enter numbers between 0 to 10');
    if (firstScore + secondScore > 10) throw new Error('Total score for a frame must not exceed 10');
    this.frameScores.push(firstScore);
    this.frameScores.push(secondScore);
  }

  bonusSpareRoll(score) {
    if (score < 0 || score > 10) throw new Error('Please enter numbers between 0 to 10');
    this.bonusRollScores.push(score);
  }

  bonusStrikeRolls(firstScore, secondScore) {
    if (firstScore < 0 || firstScore > 10 || secondScore < 0 || secondScore > 10) throw new Error('Please enter numbers between 0 to 10');
    this.bonusRollScores.push(firstScore);
    this.bonusRollScores.push(secondScore);
  }

  getFrameScores() {
    return this.frameScores;
  }

  getBonusRollScores() {
    return this.bonusRollScores;
  }
}

module.exports = Frame;
