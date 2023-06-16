class Frame {
  constructor() {
    this.ballScores = [0, 0, 0];
  }

  addBallScore(ball, score) {
    this.ballScores[ball - 1] = score;
  }

  getBallScore(ball) {
    return this.ballScores[ball - 1];
  }
}

module.exports = Frame;
