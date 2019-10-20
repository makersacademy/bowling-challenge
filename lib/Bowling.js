
class Bowling {
  constructor() {
    this.score = 0;
    this.frames = [];
    this.currentFrame = [];
    this.PINS = 10;
    this.MAX_FRAMES = 10;
    this.MAX_TRIES = 2;
  }

  getCurrentScore() {
    return this.score;
  }

  roll(pins) {
    this.currentFrame.push(pins);
    // storing current frame
    if (this.isFrameComplete()) {
      this.frames.push(this.currentFrame);
    }
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
}
module.exports = Bowling;
