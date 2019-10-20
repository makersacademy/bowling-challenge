
class Bowling {
  constructor() {
    this.currentScore = 0;
    this.frames = [];
    this.currentFrame = [];
    this.framesScores = [];
    this.PINS = 10;
    this.MAX_FRAMES = 10;
    this.MAX_TRIES = 2;
  }

  getCurrentScore() {
    return this.currentScore;
  }

  roll(pins) {
    this.currentFrame.push(pins);
    if (this.isFrameComplete()) {
      this.completeFrame();
      this.refreshFrame();
    }
    this.updateCurrentScore();
  }

  updateCurrentScore() {
    this.currentScore = this.framesScores.reduce((a, b) => a + b, 0);
  }

  getFrameScore() {
    return this.currentFrame.reduce((a, b) => a + b, 0);
  }

  isFrameComplete() {
    return (this.getFrameScore() === this.PINS || this.currentFrame.length === this.MAX_TRIES);
  }

  isStrike() {
    return this.currentFrame[0] === this.PINS;
  }

  isSpare() {
    return this.currentFrame[0] + this.currentFrame[1] === this.PINS;
  }

  completeFrame() {
    this.frames.push(this.currentFrame);
    this.framesScores.push(this.getFrameScore());
  }

  refreshFrame() {
    this.currentFrame = [];
  }
}
module.exports = Bowling;
