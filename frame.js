
class Frame {

  constructor() {
    this.totalFrameScore = 0
    this.isFrameCompleted = false
  }

  analyseScore(score) {
    if (score == 10) {this.strike(score)}
  }

  strike(score) {
    this.isFrameCompleted = true;
    this.totalFrameScore += score;
  }
}

module.exports = Frame;