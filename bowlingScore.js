class BowlingScore {
  constructor() {
    this.totalScore = 0;
    this.scorecard = [];
  }
  getTotalScore() {
    this.addToTotal();
    return this.totalScore;
  }
  addToScorecard(frame_score) {
    this.scorecard.push(frame_score);
  }
  getScorecard() {
    return this.scorecard
  }
  addToTotal() {
    this.totalScore = 0;
    const sum = (previousValue, nextValue) => previousValue + nextValue;
    if(this.scorecard.length > 0) { this.totalScore += this.scorecard.flat(1).reduce(sum);}
  }
}

module.exports = BowlingScore