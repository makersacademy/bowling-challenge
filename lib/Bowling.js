/* eslint-disable class-methods-use-this */
class Bowling {
  constructor() {
    this.currentScore = 0;
    this.frames = [];
    this.rolls = [];
    this.currentFrame = [];
  }

  roll(pins) {
    if (this.isPlayable()) {
      this.pushRoll(pins);
      if (this.isFrameComplete()) {
        this.nextFrame();
      }
    }
  }

  score() {
    let score = 0;

    for (let i = 0; i < this.frames.length; i++) {
      const current = this.frames[i];
      const next = this.getFrame(this.frames, i + 1);
      const onemore = this.getFrame(this.frames, i + 2);
      if (i >= 8) {
        if (this.isStrike(current)) {
          if (this.isStrike(next)) {
            score
              += this.getFrame(current)
              + this.frameScore(next)
              + this.frameScore(onemore)
              - 10;
          } else {
            score += this.frameScore(next) + this.getFrame(current);
          }
        }
      } else if (this.isStrike(current)) {
        if (this.isStrike(next)) {
          score
            += this.getFrame(current)
            + this.frameScore(next)
            + this.frameScore(onemore);
        } else {
          score += this.frameScore(next) + this.getFrame(current);
        }
      } else if (this.isSpare(current)) {
        score += this.frameScore(current) + this.getFrame(next);
      } else {
        score += this.frameScore(current);
      }
    }
    this.currentScore = score;
    return this.currentScore;
  }

  isFrameComplete() {
    if (
      // the last frame
      this.frames.length === 9
      && (this.isStrike(this.currentFrame) || this.isSpare(this.currentFrame))
    ) {
      return this.currentFrame.length === 3;
    }
    return (
      this.frameScore(this.currentFrame) === 10 || this.currentFrame.length >= 2
    );
  }

  isStrike(frame) {
    return frame[0] === 10;
  }

  isSpare(frame) {
    return frame[0] + frame[1] === 10;
  }

  pushRoll(pins) {
    this.currentFrame.push(pins);
  }

  nextFrame() {
    if (this.isPushable()) {
      this.frames.push(this.currentFrame);
    }

    this.currentFrame = [];
  }

  isCalculated() {
    return this.calculated;
  }

  isPlayable() {
    return this.frames.length <= 10;
  }

  isPushable() {
    return this.frames.length < 10;
  }

  gameOver() {
    return this.frames.length === 10;
  }

  perfectGame() {
    return this.score() === 300;
  }

  previousFrame() {
    return this.frames[this.frames.length - 1];
  }

  rollsSum(frames) {
    return frames.reduce((previous, current) => previous + current);
  }

  // Get index in the given array
  getFrame(frames, index = 0) {
    return Array.isArray(frames) && !!frames[index] ? frames[index] : false;
  }

  frameScore(frame) {
    return Array.isArray(frame) ? this.rollsSum(frame) : 0;
  }
}
module.exports = Bowling;
