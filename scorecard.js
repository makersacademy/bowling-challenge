class Scorecard {
  constructor () {
    this.frames = []
    this.frameScores = []
  }

  allFrames () {
    return this.frames
  }

  allFrameScores () {
    return this.frameScores
  }

  addFrame (frame) {
    this.frames.push(frame)
  }

  scoreCalculator (frame) {
    if (this.checkPreviousFrameForSpare()) {
      this.addToPreviousFrame(frame.frameResult()[0], 1)
    } // check and add spare bonus to previous frame

    if (this.checkPreviousFrameForStrike()) {
      this.addToPreviousFrame(frame.frameScore(), 1)
    } // check and add strike bonus to previous frame

    if (this.frameScores.length === 9) {
      if (this.checkSecondPreviousFrameForStrike()) {
        this.addToPreviousFrame(frame.frameResult()[0], 2)
      } // check and add strike bonus to second previous frame
      this.addFrameScore(frame, frame.frameResult()[2])
    } else {
      if (this.checkSecondPreviousFrameForStrike()) {
        this.addToPreviousFrame(frame.frameScore(), 2)
      } // check and add strike bonus to second previous frame
      this.addFrameScore(frame, 0)
    }
  }

  addFrameScore (frame, frameTenBonus) {
    this.frameScores.push(frame.frameScore() + frameTenBonus)
  }

  checkPreviousFrameForSpare () {
    return this.frames.slice(-2)[0].isSpare()
  }

  checkPreviousFrameForStrike () {
    return this.frames.slice(-2)[0].isStrike()
  }

  checkSecondPreviousFrameForStrike () {
    return this.frames.slice(-3)[0].isStrike() && this.checkPreviousFrameForStrike()
  }

  scoreTotal () {
    return this.frameScores.reduce((a, b) => a + b, 0)
  }

  addToPreviousFrame (score, indexReduction) {
    this.frameScores[this.frameScores.length - indexReduction] += score
  }
}

module.exports = Scorecard
