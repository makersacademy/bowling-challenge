class Frame {
  constructor() {
    this.ballScores = [0, 0, 0];
    this.bonusScore = 0;
    this.spare = false;
    this.strike = false;
  }

  checkCompleteFrame() {
    if (this.getBallScore(1) !== 0 && this.getBallScore(2) !== 0) {
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
    return 10 - this.frameScore();
  }

  getSpare() {
    return this.spare;
  }

  getStrike() {
    return this.strike;
  }

  setBallScore(ball, score) {
    this.ballScores[ball - 1] = score;
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
