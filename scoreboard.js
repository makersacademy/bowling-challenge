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
    const isPreviousSpare = (this.frames.slice(-2)[0].isSpare()) // check if previous frame was spare
    const isPreviousStrike = (this.frames.slice(-2)[0].isStrike()) // check if previous frame was strike
    const isSecondPreviousStrike = (this.frames.slice(-3)[0].isStrike()) // check if previous frame -1 was strike

    if (isPreviousSpare === true) {
      this.addToPreviousFrame(frame.frameResult()[0], 1) // add spare bonus to previous frame
    }

    if (isSecondPreviousStrike === true && isPreviousStrike === true) {
      this.addToPreviousFrame(frame.frameScore(), 2) // add strike bonus to second previous frame
    }

    if (isPreviousStrike === true) {
      this.addToPreviousFrame(frame.frameScore(), 1) // add strike bonus to previous frame
    }

    this.frameScores.push(frame.frameScore()) // add frame score to current frame
  }

  scoreTotal () {
    return this.frameScores.reduce((a, b) => a + b, 0)
  }

  resetFrames () {
    this.frames = []
  }

  addToPreviousFrame (score, indexReduction) {
    this.frameScores[this.frameScores.length - indexReduction] += score
  }
}

module.exports = Scoreboard

