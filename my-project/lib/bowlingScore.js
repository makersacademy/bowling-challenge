class BowlingScore {
  constructor(scoresheet) {
    this.scoresheet = scoresheet;
    this.nineFrames = this.scoresheet.slice(0, 9);
    this.total = [];
    this.sparePoints = 0;
    this.strikePoints = 0;
  }

  frame() {
    // calculate points for frames that are not strikes or spares
    const notBonusFrames = this.scoresheet.slice(0, 10);
    // check if a frame sum is less than 10
    // if yes then add the total
    // Then push the total into total array
    notBonusFrames.forEach((frame) => {
      const roll = frame.reduce((a, b) => a + b, 0);
      if (roll < 10) {
        this.total.push(frame);
      }
    });
  }

  spares() {
    // check if sum of each frame is 10 and if the first roll does not equal 10
    this.nineFrames.forEach((frame) => {
      const roll = frame.reduce((a, b) => a + b, 0);

      if (roll === 10 && frame[0] != 10) {
        this.sparePoints = 10 + frame[0];
        this.total.push(this.sparePoints, 0);
      }
    });
  }

  strikes() {
    this.nineFrames.forEach((frame) => {
      // find the next frame
      const index = this.nineFrames.indexOf(frame);
      const nextFrame = this.scoresheet[index + 1];
      const nextFrameSum = nextFrame.reduce((a, b) => a + b, 0);
      // check if current frame is a strike and the frame after is a strike
      if (frame[0] === 10 && nextFrame[0] === 10) {
        this.strikePoints = 20 + nextFrameSum;
        this.total.push(this.strikePoints);
        // if player scored a single strike
      } else if (frame[0] == 10 && frame[0] != nextFrame[0]) {
        this.strikePoints = 10 + nextFrameSum;
        this.total.push(this.strikePoints);
      }
    });
  }

  tenthFrame() {
    const tenthFrame = this.scoresheet[9];
    const gameLength = this.scoresheet.length;
    const tenthSpare = tenthFrame.reduce((a, b) => a + b, 0);
    // if the tenth frame is a strike or spare
    // calculate sum for bonus frames and 10th frame
    // push sum into total array
    if (tenthFrame[0] === 10 || tenthSpare == 10) {
      const bonusFrames = this.scoresheet.slice(9, gameLength);
      const points = bonusFrames.flat();
      const pointsSum = points.reduce((a, b) => a + b, 0);
      this.total.push(pointsSum);
    }
  }

  finalScore() {
    const points = this.total.flat();
    const totalPoints = points.reduce((a, b) => a + b, 0);
    return `Final Score: ${totalPoints}`;
  }
}

module.exports = BowlingScore;
