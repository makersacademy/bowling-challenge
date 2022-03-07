const Frame = require('./frame')

class ScoreCard {
  // An array starts at 0 so for frames 1 - 10
  // of the game the corresponding values in the array are 0 - 9
  // Current_frame has to start at 1 so that a check of
  // current_frame - 1 (for previous frame) and strikes works for first frame

  constructor (frame) {
    this.frame = frame
    this.frames = []
  }

  currentFrameNumber () {
    return this.frames.length
  }

  currentFrame () {
    return this.frames.at(-1)
  }

  gameIsComplete () {
    return (this.frames.length === 10)
  }

  gameTotalScore () {
    let gameTotal = 0
    for (let i = 0; i < this.frames.length; i++) {
      const gameScore = this.frames[i].frameScore
      gameTotal = gameTotal + gameScore
    }
    return gameTotal
  }

  addFrame (frame = new Frame()) {
    if (this.frames.length === 10) {
      throw new Error('The scorecard already has the maximum of ten frames.')
    } else {
      this.frames.push(frame)
    }
  }

  isPreviousFrameSpare (frame) {
    if (this.frames.indexOf(frame) > 0) {
      const i = this.frames.indexOf(frame)
      const isSpare = this.frames[i - 1].spareBoolean
      return isSpare
    } else {
      return false
    }
  }

  isPreviousFrameStrike (frame) {
    if (this.frames.indexOf(frame) > 0) {
      const i = this.frames.indexOf(frame)
      const isStrike = this.frames[i - 1].strikeBoolean
      return isStrike
    } else {
      return false
    }
  }

  isTwoFramesPreviousStrike (frame) {
    if (this.frames.indexOf(frame) > 1) {
      const i = this.frames.indexOf(frame)
      const isStrike = this.frames[i - 2].strikeBoolean
      return isStrike
    } else {
      return false
    }
  }
}

module.exports = ScoreCard
