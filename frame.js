class Frame {
  constructor(...scores) {
    this.scores = scores;
  }

  getScores() {
    return this.scores;
  }

  isStrike() {
    return this.scores[0] == 10
  }

  isSpare() {
    return this.getBaseScore() == 10 && !this.isStrike()
  }

  getBaseScore() {
    return this.scores.reduce((sum, score) => sum + score, 0)
  }
}

module.exports = Frame;