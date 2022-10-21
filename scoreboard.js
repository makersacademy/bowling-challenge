class Scoreboard {
  constructor () {
    this.frames = []
    this.totalScore = 0
  }

  allFrames () {
    return this.frames
  }

  addFrame (frame) {
    this.frames.push(frame)
  }

  scoreCalculator(frame) {
    let score = 0
    // console.log(this.frames)
    // console.log('this.frames.length - 1', this.frames.slice(-2)[0])
    // console.log('is spare?', this.frames.slice(-2)[0].isSpare())

    if (this.frames.slice(-2)[0].isSpare() === true) score += 10
    score += (frame.frameResult()[0] + frame.frameResult()[1])
    
    this.totalScore += score
  }

  scoreTotal () {
    return this.totalScore
  }

  resetFrames () {
    this.frames = []
  }
}

module.exports = Scoreboard