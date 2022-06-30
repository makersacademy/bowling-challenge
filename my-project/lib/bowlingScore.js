class BowlingScore {
  constructor(scoresheet) {
    this.scoresheet = scoresheet;
  }

  finalScore() {
    const points = this.scoresheet.flat();
    const totalPoints = points.reduce((a, b) => a + b, 0);
    console.log(totalPoints);
    console.log(points);
    return `Final Score: ${totalPoints}`;
  }
}

module.exports = BowlingScore;
