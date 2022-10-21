class Scoreboard {
  constructor () {
    this.frames = []
    this.frameScores = []
    this.totalScore = 0
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

  scoreCalculator(frame) {
    const isPreviousSpare = (this.frames.slice(-2)[0].isSpare()) // check if previous frame was spare
    
    if (isPreviousSpare === true) {
      this.addToPreviousFrame(frame.frameResult()[0]); // add spare bonus to previous frame
    }
    this.frameScores.push(frame.frameScore()) // add frame score to current frame

    console.log('this.frameScores', this.frameScores)
  }

  scoreTotal () {
    return this.totalScore
  }

  resetFrames () {
    this.frames = []
  }

  addToPreviousFrame(score) {
    this.frameScores[this.frameScores.length - 1] += score
  }
}

module.exports = Scoreboard