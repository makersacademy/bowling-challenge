class BowlingScoring {
  constructor(scorecard) {
    this.scorecard = scorecard;
  }

  calculate() {
    let total = 0
    let score = this.scorecard.flat();

    for (let i = 0; i < score.length; i++) {
      total += score[i];
    }
    return total;
    
  }

}

module.exports = BowlingScoring;