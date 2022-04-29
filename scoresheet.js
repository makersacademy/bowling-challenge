class Scoresheet {
  constructor() {
    this.frames = [];
  }

  addFrame(frame) {
    this.frames = this.frames.concat(frame);
  }

  newFrame(frame) {
    this.currentFrame = frame;
  }

  frameScore(frameNum) {
    let score = 0;
    score += this.frames[frameNum].firstRoll();
    if (this.frames[frameNum].isStrike() === false) {
      score += this.frames[frameNum].secondRoll();
    }
    return score;
  }

  totalScore() {
    let score = 0;
    for (let i = 0; i < 10; i++) {
      score += this.frameScore(i);
    }
    return score;
  }
  
}

module.exports = Scoresheet;