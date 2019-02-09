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
    // this._addSpareBonus()
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

  _currentFrame () {
    return this._frames[this._frames.length - 1]
  }

  _getPenultimateFrame () {
    return this._frames[this._frames.length - 2]
  }

  _newFrame () {
    this._frames.push(new Frame(this.frame))
  }

  _lastFrameComplete () {
    return this._currentFrame().complete()
  }
}

module.exports = Bowling
