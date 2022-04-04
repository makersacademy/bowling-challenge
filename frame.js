
class Frame {

  constructor() {
    this.totalFrameScore = 0
    this.frameCompleted = false
    this.rollCount = 0
    this.remainingPins = 10
  }

  analyseScore(score) {
    if (score == 10) {this.strike(score)}
    else {this.notStrike(score)}
  }

  strike(score) {
    this.frameCompleted = true;
    this.totalFrameScore += score;
  }

  notStrike(score) {
    this.rollCount += 1;
    this.totalFrameScore += score;
    this.remainingPins -= score
    this.isFrameCompleted()
  }

  isFrameCompleted() {
    if (this.rollCount == 2) {this.frameCompleted = true}
  }
}

module.exports = Frame;