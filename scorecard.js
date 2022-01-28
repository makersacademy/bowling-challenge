class Scorecard {
  constructor(scores) {
    this.scores = scores;
  }

  getScore() {
    return this.scores.reduce((a, b) => a + b)
  }
}

module.exports = Scorecard;