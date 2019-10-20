
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
    this.calculateBonusPoints(pins);

    if (this.isFrameComplete()) {
      this.completeFrame();
      this.refreshFrame();
    }
    this.updateCurrentScore(pins);
  }

  calculateBonusPoints(pins) {
    if (this.frames.length > 0 && this.isStrike(this.previousFrame())) {
      this.framesScores[this.framesScores.length - 1] += pins;
    }
    if (this.frames.length > 0 && this.isSpare(this.previousFrame()) && this.currentFrame.length === 1) {
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
    return (this.getFrameScore() === this.PINS || this.currentFrame.length === this.MAX_TRIES);
  }

  isStrike(frame) {
    return frame[0] === this.PINS;
  }

  isSpare(frame) {
    return frame[0] + frame[1] === this.PINS;
  }

  completeFrame() {
    this.frames.push(this.currentFrame);
    this.framesScores.push(this.getFrameScore());
  }

  refreshFrame() {
    this.currentFrame = [];
  }

  previousFrame() {
    return this.frames[this.frames.length - 1];
  }
}
module.exports = Bowling;
