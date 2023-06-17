const ScoreCard = require("./scorecard");

class Gameplay {
  constructor() {
    this.currentFrame = 1;
    this.currentBall = 1;
    this.scorecard = new ScoreCard();
  }

  checkContinue(frames) {
    const frame = frames[this.currentFrame];
    if (this.currentFrame === 10 && this.currentBall == 4) {
      return false;
    } else if (
      this.currentFrame === 10 &&
      frame.checkCompleteFrame() &&
      frame.checkSpare() === false &&
      frame.checkStrike() === false
    ) {
      return false;
    } else {
      return true;
    }
  }

  getFinalScore(frames) {
    let score = 0;
    Object.values(frames).forEach((frame) => {
      score = score + frame.totalFrameScore();
    });
    return score;
  }

  processCurrentBall(frame, input) {
    if (frame.getBallScore(1) + Number(input) === 10) {
      frame.setSpare();
    } else if (input === "X") {
      frame.setStrike(this.currentBall);
    } else {
      frame.setBallScore(this.currentBall, Number(input));
    }
  }

  setNextBall(frames) {
    if (this.currentFrame < 10) {
      if (
        this.currentBall === 1 &&
        frames[this.currentFrame].getStrike() == false
      ) {
        this.currentBall = 2;
      } else {
        this.currentFrame++;
        this.currentBall = 1;
      }
    } else {
      this.currentBall++;
    }
  }

  reset() {
    this.currentFrame = 1;
    this.currentBall = 1;
  }
}

module.exports = Gameplay;
