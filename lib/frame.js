class Frame {
  constructor() {
    this.frameScores = [];
    this.bonusRollScores = [];
  }

  playFrame(firstScore, secondScore) {
    if (!Number.isInteger(firstScore) || !Number.isInteger(secondScore)) throw new Error('Scores must be integers');
    if (firstScore < 0 || firstScore > 10 || secondScore < 0 || secondScore > 10) throw new Error('Please enter numbers between 0 to 10');
    if (firstScore + secondScore > 10) throw new Error('Total score for a frame must not exceed 10');
    this.frameScores.push(firstScore);
    this.frameScores.push(secondScore);
  }

  getFrameScores() {
    return this.frameScores;
  }

  bonusSpareRoll(score) {
    if (!Number.isInteger(score)) throw new Error('Scores must be integers');
    if (score < 0 || score > 10) throw new Error('Please enter numbers between 0 to 10');
    this.bonusRollScores.push(score);
    this.bonusRollScores.push(0);
  }

  bonusStrikeRolls(firstScore, secondScore) {
    if (!Number.isInteger(firstScore) || !Number.isInteger(secondScore)) throw new Error('Scores must be integers');
    if (firstScore < 0 || firstScore > 10 || secondScore < 0 || secondScore > 10) throw new Error('Please enter numbers between 0 to 10');
    this.bonusRollScores.push(firstScore);
    this.bonusRollScores.push(secondScore);
  }

  getBonusRollScores() {
    return this.bonusRollScores;
  }
}

module.exports = Frame;