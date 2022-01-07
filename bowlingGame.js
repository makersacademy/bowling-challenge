class Bowling {
  constructor() {
    this.totalScore = 0;
  }
  getTotalScore() {
    return this.totalScore;
  }
  roll(pins) {
    this.totalScore += pins;
  }
}

module.exports = Bowling