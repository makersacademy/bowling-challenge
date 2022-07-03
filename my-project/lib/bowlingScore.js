class BowlingScore {
  constructor(scoresheet) {
    this.scoresheet = scoresheet;
    this.nineFrames = this.scoresheet.slice(0, 9);
    this.total = [];
    this.sparePoints = 0;
    this.strikePoints = 0;
  }

  frame() {
    // dont check bonus frames
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

  spare() {
    // check if sum of each frame is 10 and if the first roll does not equal 10
    this.nineFrames.forEach((frame) => {
      const roll = frame.reduce((a, b) => a + b, 0);

      if (roll === 10 && frame[0] != 10) {
        this.sparePoints = 10 + frame[0];
        this.total.push(this.sparePoints, 0);
      }
    });
  }

  strikesInARow() {
    // check if a strike was scored after current strike
    this.nineFrames.forEach((frame) => {
      // find the next frame
      const index = this.nineFrames.indexOf(frame);
      console.log(this.index);
      // for the ninth frame need to also check the tenth frame
      const nextFrame = this.scoresheet[index + 1];
      // check if current frame is a strike and the frame after is a strike
      if (frame[0] === 10 && nextFrame[0] === 10) {
        // console.log("I found a strike in a row");
        const nextFrameSum = nextFrame.reduce((a, b) => a + b, 0);
        this.strikePoints = 20 + nextFrameSum;
        this.total.push(this.strikePoints);
      }
    });
  }

  strike() {
    this.nineFrames.forEach((frame) => {
      // find the next frame
      // check if the first roll of each frame is a strike
      // and if it's a single strike and not strikes in a row
      const index = this.nineFrames.indexOf(frame);
      const nextFrame = this.scoresheet[index + 1];
      // const nextFrame = this.scoresheet[index + 1];
      if (frame[0] == 10 && frame[0] != nextFrame[0]) {
        console.log(frame);
        console.log(this.nextFrame);
        console.log("end");
        // calculate the sum of next frame and add it to 10
        // then push it into total array
        const nextFrameSum = nextFrame.reduce((a, b) => a + b, 0);
        this.strikePoints = 10 + nextFrameSum;
        // console.log(this.strikePoints);
        this.total.push(this.strikePoints);
      }
    });
  }

  tenthFrame() {
    const tenthFrame = this.scoresheet[9];
    const gameLength = this.scoresheet.length;
    const tenthSpare = tenthFrame.reduce((a, b) => a + b, 0);
    // if the tenth frame is a strike or spare
    // calculate sum from two bonus frames and 10th frame
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
    // console.log(points);
    const totalPoints = points.reduce((a, b) => a + b, 0);
    return `Final Score: ${totalPoints}`;
  }
}

module.exports = BowlingScore;
