class Scoreboard {
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
    if (this.isPreviousSpare()) {
      this.addToPreviousFrame(frame.frameResult()[0], 1)
    } // check and add spare bonus to previous frame

    if (this.isPreviousStrike()) {
      this.addToPreviousFrame(frame.frameScore(), 1)
    } // check and add strike bonus to previous frame

    if (this.frameScores.length === 9) {
      if (this.isSecondPreviousStrike()) {
        this.addToPreviousFrame(frame.frameResult()[0], 2)
      } // check and add strike bonus to second previous frame
      this.addFrameScore(frame, frame.frameResult()[2])
    } else {
      if (this.isSecondPreviousStrike()) {
        this.addToPreviousFrame(frame.frameScore(), 2)
      } // check and add strike bonus to second previous frame
      this.addFrameScore(frame, 0)
    }
  }

  addFrameScore (frame, frameTenBonus) {
    // add frame score to current frame
    this.frameScores.push(frame.frameScore() + frameTenBonus)
  }

  isPreviousSpare () {
    // check if previous frame was spare
    return this.frames.slice(-2)[0].isSpare()
  }

  isPreviousStrike () {
    // check if previous frame was strike
    return this.frames.slice(-2)[0].isStrike()
  }

  isSecondPreviousStrike () {
    // check if previous frame -1 was strike and needs bonus
    return this.frames.slice(-3)[0].isStrike() && this.isPreviousStrike()
  }

  scoreTotal () {
    return this.frameScores.reduce((a, b) => a + b, 0)
  }

  addToPreviousFrame (score, indexReduction) {
    this.frameScores[this.frameScores.length - indexReduction] += score
  }
}

module.exports = Scoreboard
