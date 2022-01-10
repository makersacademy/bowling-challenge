class Frame {
  constructor() {
    this.frameScores = [];
  }

  addRollScore(rollscore) {
    this.frameScores.push(rollscore);
  }

  isStrike() {
    return this.frameScores.length === 1 && this.getFrameScoresSum === 10;
  }

  isSpare() {
    return this.frameScores.length === 2 && this.getFrameScoresSum === 10;
  }

  getFrameScoresSum() {
    let sum = 0;
    this.frameScores.forEach((element) => {
      sum += element;
    });
    return sum;
  }
}

module.exports = Frame;
