class BowlingScore {
  constructor(scoresheet) {
    this.scoresheet = scoresheet;
    this.spareCount = 0;
    this.sparePoints = 0;
    this.total = [];
  }

  frame() {
    // check if a frame sum is less than 10
    // if yes then add the total
    // push the total into total array
    this.scoresheet.forEach((frame) => {
      const roll = frame.reduce((a, b) => a + b, 0);
      if (roll < 10) {
        this.total.push(frame);
      }
    });
  }

  spare() {
    // check each array, if the sum of array is 10
    // and if the first roll does not equal 10
    this.scoresheet.forEach((frame) => {
      const roll = frame.reduce((a, b) => a + b, 0);

      if (roll === 10 && frame[0] != 10) {
        this.sparePoints = 10 + frame[0];
        this.total.push(this.sparePoints, 0);
        this.spareCount += 1;
      }
    });
  }

  finalScore() {
    const points = this.total.flat();
    const totalPoints = points.reduce((a, b) => a + b, 0);
    return `Final Score: ${totalPoints}`;
  }
}

module.exports = BowlingScore;
