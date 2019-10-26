class Bowling {
  constructor() {
    this.currentScore = 0;
    this.frames = [];
    this.currentFrame = [];
    this.framesScores = [];
  }

  getCurrentScore() {
    return this.currentScore;
  }

  roll(pins) {
    this.currentFrame.push(pins);
    this.calculateBonusPoints(pins);

    if (this.isFrameComplete() && this.frames.length !== 9) {
      this.completeFrame();
      this.refreshFrame();
    }

    if (this.frames.length === 9) {
      if (this.isStrike(this.currentFrame)) {
        this.framesScores[9] = this.getFrameScore();
        if (this.currentFrame.length === 3) {
          this.frames.push(this.currentFrame);
        }
      } else if (this.isSpare(this.currentFrame)) {
        this.framesScores[9] = this.getFrameScore();
        if (this.currentFrame.length === 3) {
          this.frames.push(this.currentFrame);
        }
      } else {
        this.framesScores[9] = this.getFrameScore();
        if (this.currentFrame.length === 2) {
          this.frames.push(this.currentFrame);
        }
      }
    }
    this.updateCurrentScore(pins);
  }

  score() {}

  calculateBonusPoints(pins) {
    if (this.frames.length > 0 && this.isStrike(this.previousFrame())) {
      this.framesScores[this.framesScores.length - 1] += pins;
    }

    if (
      this.frames.length > 1 &&
      this.isStrike(this.frames[this.frames.length - 2])
    ) {
      this.framesScores[this.framesScores.length - 2] += pins;
    }
    if (
      this.frames.length > 0 &&
      this.isSpare(this.previousFrame()) &&
      this.currentFrame.length === 1
    ) {
      this.framesScores[this.framesScores.length - 1] += pins;
    }
  }

  updateCurrentScore(pins) {
    this.currentScore = this.framesScores.reduce((a, b) => a + b, 0);
    if (this.currentFrame.length === 1) {
      this.currentScore += pins;
    }
  }

  getFrameScore() {
    return this.currentFrame.reduce((a, b) => a + b, 0);
  }

  isFrameComplete() {
    return this.getFrameScore() === 10 || this.currentFrame.length === 2;
  }

  isStrike(frame) {
    return frame[0] === 10;
  }

  isSpare(frame) {
    return frame[0] + frame[1] === 10;
  }

  completeFrame() {
    this.frames.push(this.currentFrame);
    this.framesScores.push(this.getFrameScore());
  }

  refreshFrame() {
    this.currentFrame = [];
  }

  gameOver() {
    return this.frames.length === 10;
  }

  perfectGame() {
    return this.getCurrentScore() === 300;
  }

  previousFrame() {
    return this.frames[this.frames.length - 1];
  }
}
module.exports = Bowling;
