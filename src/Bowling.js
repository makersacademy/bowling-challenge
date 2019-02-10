'use strict'
let Frame = require('../src/Frame')

class Bowling {
  constructor () {
    this.frame = 0
    this.scorecardComplete = false
    this._frames = []
    this._newFrame()
  }

  enterScore (number) {
    let frame = this._currentFrame()
    frame.add(number)
    if (frame.isComplete()) {
      this.endFrame()
    }
  }

  endFrame () {
    if (!this.scorecardComplete) {
      this.frame++
    }
    if (this._frames.length >= 2) {
      this._addSpareBonus()
    }
    if (this._frames.length >= 3) {
      this._addStrikeBonus()
    }
    this.checkGameEnd()
  }

  checkGameEnd () {
    if (this.frame === 10) {
      // this.endFrame()
      this.endGame()
    } else {
      this._newFrame()
    }
  }

  endGame () {
    if (this._isLastBallRolled()) {
      this._addFinalStrikeBonus()
    }
    this.scorecardComplete = true
  }

  gameScore () {
    let score = 0
    this._frames.forEach(function (num) {
      score += num.frameScore()
    })
    return score
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

  _isLastBallRolled () {
    return this._frames[9].secondRoll()
  }

  _addSpareBonus () {
    let previousFrame = this._previousFrame(1)
    if (!previousFrame.isSpare()) {
      return
    }
    previousFrame.add(this._currentFrame().firstRoll())
  }

  _addStrikeBonus () {
    let secondLastFrame = this._previousFrame(2)
    if (!secondLastFrame.isStrike()) {
      return
    }
    let lastFrame = this._previousFrame(1)
    if (lastFrame.isStrike()) {
      secondLastFrame.add(lastFrame.firstRoll())
      secondLastFrame.add(this._currentFrame().firstRoll())
    } else {
      secondLastFrame.add(lastFrame.firstRoll())
      secondLastFrame.add(lastFrame.secondRoll())
    }
  }

  _addFinalStrikeBonus () {
    let previousFrame = this._previousFrame(1)
    if (!previousFrame.isStrike()) {
      return
    }
    previousFrame.add(this._currentFrame().firstRoll())
    previousFrame.add(this._currentFrame().secondRoll())
  }
}

module.exports = Bowling
