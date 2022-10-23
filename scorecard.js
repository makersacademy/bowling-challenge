class Scorecard {
  constructor () {
    this.frames = []
    this.frameScores = []
  }

  allFrameScores () {
    return this.frameScores
  }

  addFrame (frame) {
    this.frames.push(frame)
  }

  scoreCalculator (currentFrame) {
    this.calculatePreviousBonuses(currentFrame)

    if (this.frameScores.length === 9) {
      this.addFrameScore(currentFrame, currentFrame.frameResult()[2])
    } else {
      this.addFrameScore(currentFrame, 0)
    }
  }

  calculatePreviousBonuses (currentFrame) {
    if (this.getPreviousFrame().checkIfSpare() === true) {
      this.addFrameBonus(currentFrame.frameResult()[0], 1)
    }

    if (this.getPreviousFrame().checkIfStrike() === true) {
      this.addFrameBonus(currentFrame.frameScore(), 1)
    }

    if (this.frameScores.length === 9) {
      if (this.getSecondPreviousFrameIfDoubleStrike()) {
        this.addFrameBonus(currentFrame.frameResult()[0], 2)
      }
    } else {
      if (this.getSecondPreviousFrameIfDoubleStrike()) {
        this.addFrameBonus(currentFrame.frameScore(), 2)
      }
    }
  }

  addFrameScore (frame, frameTenBonus) {
    this.frameScores.push(frame.frameScore() + frameTenBonus)
  }

  addFrameBonus (score, indexReduction) {
    this.frameScores[this.frameScores.length - indexReduction] += score
  }

  scoreTotal () {
    return this.frameScores.reduce((total, nextScore) => total + nextScore, 0)
  }

  getPreviousFrame () {
    return this.frames.slice(-2)[0]
  }

  getSecondPreviousFrameIfDoubleStrike () {
    if (
      this.frames.slice(-3)[0].checkIfStrike() &&
      this.frames.slice(-2)[0].checkIfStrike()
    ) { return true }
  }
}

module.exports = Scorecard
