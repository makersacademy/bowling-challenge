'use strict'
class Bowling {
  constructor () {
    this.frame = 0
    this.roll = 0
    this.frameScore = 0
    this.gameScore = 0
    this.scorecardComplete = false
    this.spare = false
  }

  enterScore (number) {
    this.frameScore += number
    this.roll++
    if (this.spare) {
      this.spare = false
    }
    this.checkFrameEnd()
  }

  checkFrameEnd () {
    if (this.frameScore === 10) {
      this.spare = true
      this.endFrame()
    } else if (this.roll === 2) {
      this.endFrame()
    }
  }

  endFrame () {
    this.roll = 0
    this.frame++
    this.gameScore += this.frameScore
    this.frameScore = 0
    this.checkGameEnd()
  }

  checkGameEnd () {
    if (this.frame === 10) {
      this.endGame()
    }
  }

  endGame () {
    this.scorecardComplete = true
  }
}

module.exports = Bowling
