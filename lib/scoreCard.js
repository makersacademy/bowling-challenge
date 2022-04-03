class ScoreCard {
  constructor() {
    this.frames = [];
  }

  getFrames() {
    return this.frames;
  }

  addFrame(frame) {
    this.frames.push(frame);
  }

  calculateBonusPoints() {
    numFrames = this.frames.length;
    if (numFrames === 1) {
      return;
    }

    let previousFrame = this.frames[numFrames - 2];
    let currentFrame = this.frames[numFrames - 1];
    if (numFrames > 2) {
      let secondLastFrame = this.frames[numFrames - 3];
    }

    if (previousFrame.isSpare()) {
      previousFrame.addBonusPoints(currentFrame.getRoll1());
    }

    if (previousFrame.isStrike()) {
      previousFrame.addBonusPoints(currentFrame.getRoll1());
      if (currentFrame.getRoll2() != null) {
        previousFrame.addBonusPoints(currentFrame.getRoll2());
      }
    }

    if (
      previousFrame != null &&
      secondLastFrame != null &&
      previousFrame.isStrike() &&
      secondLastFrame.isStrike()
    ) {
      previousFrame.addBonusPoints(currentFrame.getRoll1());
    }
  }

  calculateScore() {
    let score = 0;
    this.frames.forEach((frame) => (score += frame.getFrameScore()));
    return score;
  }
}

module.exports = ScoreCard;
