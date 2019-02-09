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
    if (this._lastFrameComplete()) {
      this.endFrame()
    }
  }

  endFrame () {
    this.frame++
    this.checkGameEnd()
  }

  checkGameEnd () {
    if (this.frame === 10) {
      this.endGame()
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
    this._frames.reduce((a, b) => a + b, 0)
  }

  addSpareBonus (num) {
    this._gameScore[this._frames.length - 1] += num
  }

  _getLastFrame () {
    return this._frames[this._frames.length - 1]
  }

  _newFrame () {
    this._frames.push(new Frame(this.frame))
  }

  _lastFrameComplete () {
    return this._getLastFrame().complete()
  }

  _currentFrame () {
    if (this._lastFrameComplete()) {
      this._newFrame()
    }
    return this._getLastFrame()
  }
}

module.exports = Bowling
