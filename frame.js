class Frame {
  constructor(frameNumber) {
    this.frameNumber = frameNumber;
    this.lastBallPlayed = 0;
    this.ballScores = [0, 0, 0];
    this.bonusScore = 0;
    this.spare = false;
    this.strike = false;
  }

  checkTwoBallsPlayed() {
    if (this.lastBallPlayed === 2) {
      return true;
    } else {
      return false;
    }
  }

  frameScore() {
    return this.ballScores.reduce(
      (accumulator, currentValue) => Number(accumulator) + Number(currentValue)
    );
  }

  getBallScore(ball) {
    return this.ballScores[ball - 1];
  }

  getBonusScore() {
    return this.bonusScore;
  }

  getRemainingPins() {
    if (this.frameNumber < 10) {
      return 10 - this.frameScore();
    } else {
      if (this.lastBallPlayed === 1 && this.getBallScore(1) === 10) {
        return 10;
      } else if (
        this.lastBallPlayed === 2 &&
        (this.frameScore() === 10 || this.getBallScore(2) === 10)
      ) {
        return 10;
      } else {
        return 10 - this.frameScore();
      }
    }
  }

  getSpare() {
    return this.spare;
  }

  getStrike() {
    return this.strike;
  }

  setBallScore(ball, score) {
    this.ballScores[ball - 1] = score;
    this.lastBallPlayed = ball;
  }

  setBonusScore(bonus) {
    this.bonusScore = bonus;
  }

  setSpare() {
    this.spare = true;
    const score = 10 - this.getBallScore(1);
    this.setBallScore(2, score);
  }

  setStrike(ball) {
    this.strike = true;
    this.setBallScore(ball, 10);
  }

  totalFrameScore() {
    const frameScore = this.frameScore();
    const bonusScore = this.getBonusScore();
    return Number(frameScore + bonusScore);
  }
}

module.exports = Frame;
