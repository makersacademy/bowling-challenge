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

  frameScore(frame) {
    let score = 0;
    score += frame.firstRoll();
    if (frame.isStrike() === false) {
      score += frame.secondRoll();
    }
    return score;
  }

  totalScore() {
    let score = 0;
    this.frames.forEach((frame) => {
      score += this.frameScore(frame);
    })
    return score;
  }
  
}

module.exports = Scoresheet;