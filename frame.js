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
      (accumulator, currentValue) => accumulator + currentValue
    );
  }

  getBallScore(ball) {
    return this.ballScores[ball - 1];
  }

  getBonusScore() {
    return this.bonusScore;
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
    this.bonusScore += bonus;
  }

  setSpare() {
    this.spare = true;
    const score = 10 - this.getBallScore(1);
    this.setBallScore(2, score);
  }

  setStrike() {
    this.strike = true;
    this.setBallScore(1, 10);
  }

  totalFrameScore() {
    const frameScore = this.frameScore();
    const bonusScore = this.getBonusScore();
    return frameScore + bonusScore;
  }
}

module.exports = Frame;
