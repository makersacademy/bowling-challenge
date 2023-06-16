class Frame {
  constructor() {
    this.ballScores = [0, 0, 0];
    this.bonusScore = 0;
    this.strike = false;
  }

  setBallScore(ball, score) {
    this.ballScores[ball - 1] = score;
  }

  getBallScore(ball) {
    return this.ballScores[ball - 1];
  }

  frameScore() {
    return this.ballScores.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  }

  getStrike() {
    return this.strike;
  }

  setStrike() {
    this.strike = true;
  }

  totalFrameScore() {
    return (
      this.bonusScore +
      this.ballScores.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      )
    );
  }

  setBonusScore(bonus) {
    this.bonusScore += bonus;
  }
}

module.exports = Frame;
