'use strict'
let Frame = require('../src/Frame')

class Bowling {
  constructor () {
    this.frame = 0
    this.roll = 0
    this.frameScore = 0
    this._gameScore = {}
    this.scorecardComplete = false
    this.spare = false
    this.strike = false
    this._frames = []
    this._score = 0
    this._newFrame()
  }

  enterScore (number) {
    this._currentFrame().add(number)
    if (this._currentFrameComplete()) {
      this.endFrame()
    }
  }

  endFrame () {
    this.frame++
    if (this._frames.length >= 2) {
      this._addSpareBonus()
    }
    this.checkGameEnd()
  }

  checkGameEnd () {
    if (this.frame === 10) {
      this.endGame()
    } else {
      this._newFrame()
    }
  }

  currentFrameNumber () {
    let number = this._currentFrame().number()
    return number
  }

  endGame () {
    this.scorecardComplete = true
  }

  gameScore () {
    let score = 0
    this._frames.forEach(function (num) {
      score += num.score()
    })
    return score
  }

  _addSpareBonus () {
    if (this.scorecardComplete) {
      return
    }
    let previousFrame = this._previousFrame(1)
    if (!previousFrame.isSpare()) {
      return
    }
    let firstRollCurrentFrame = this._currentFrame().firstRoll()
    previousFrame.addBonusScore(firstRollCurrentFrame)
  }

  _currentFrame () {
    return this._frames[this._frames.length - 1]
  }

  _previousFrame (num = 1) {
    return this._frames[this._frames.length - (num + 1)]
  }

  _newFrame () {
    this._frames.push(new Frame(this.frame))
  }

  _currentFrameComplete () {
    return this._currentFrame().complete()
  }
}

module.exports = Bowling
