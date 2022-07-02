class BowlingScore {
  constructor(scoresheet) {
    this.scoresheet = scoresheet;
    this.total = [];
    this.sparePoints = 0;
    this.spareCount = 0;
    this.strikePoints = 0;
  }

  frame() {
    // check if a frame sum is less than 10
    // if yes then add the total
    // Then push the total into total array
    this.scoresheet.forEach((frame) => {
      const roll = frame.reduce((a, b) => a + b, 0);
      if (roll < 10) {
        this.total.push(frame);
      }
    });
  }

  spare() {
    // check if frame is 10 and if the first roll does not equal 10
    this.scoresheet.forEach((frame) => {
      const roll = frame.reduce((a, b) => a + b, 0);

      if (roll === 10 && frame[0] != 10) {
        this.sparePoints = 10 + frame[0];
        this.total.push(this.sparePoints, 0);
      }
    });
  }

  strike() {
    // check if the first roll of each frame equals ten
    this.scoresheet.forEach((frame) => {
      if (frame[0] == 10) {
        // find the next frame
        // calculate the sum of next frame and add it to 10
        // then push it into total array
        const index = this.scoresheet.indexOf(frame);
        const nextFrame = this.scoresheet[index + 1];
        const nextFrameSum = nextFrame.reduce((a, b) => a + b, 0);
        this.strikePoints = 10 + nextFrameSum;
        this.total.push(this.strikePoints);
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
