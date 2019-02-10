(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Bowling = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

  getCompleteFrames () {
    return this._frames.filter(frame => frame.isComplete() === true)
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
    this._calculateStrikeBonus(this._currentFrame(), lastFrame, secondLastFrame)
  }

  _calculateStrikeBonus (currentFrame, lastFrame, secondLastFrame) {
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

},{"../src/Frame":2}],2:[function(require,module,exports){
'use strict'

class Frame {
  constructor (num) {
    this._frameNumber = num
    this._score = []
    this.roll = 0
    this._spare = false
    this._strike = false
    this._complete = false
    this._bonus = 0
  }

  isComplete () {
    return this._complete
  }

  add (number) {
    if (this.isComplete() && this.isSpare()) {
      this._addSpareBonusScore(number)
      return
    } else if (this.isComplete() && this.isStrike()) {
      this._addStrikeBonusScore(number)
      return
    }
    if (!this.isComplete()) {
      this._addRoutineScore(number)
    }
  }

  number () {
    return this._frameNumber
  }

  firstRoll () {
    return this._score[0]
  }

  secondRoll () {
    return this._score[1]
  }

  frameScore () {
    let score = 0
    this._score.forEach(function (num) {
      score += num
    })
    return score
  }

  isSpare () {
    return this._spare
  }

  isStrike () {
    return this._strike
  }

  _addRoutineScore (number) {
    this._score.push(number)
    this.roll += 1
    this._checkFrameEnd()
  }

  _addSpareBonusScore (number) {
    if (this._bonus === 0) {
      this._addBonusScore(number)
      this._bonus += 1
    }
  }

  _addStrikeBonusScore (number) {
    if (this._bonus <= 1) {
      this._addBonusScore(number)
      this._bonus += 1
    }
  }

  _checkFrameEnd () {
    this._checkStrike()
    this._checkSpare()
    this._checkRollsFinished()
  }

  _checkStrike () {
    if (this.frameScore() === 10 && this.roll === 1) {
      this._strike = true
      this._complete = true
      return true
    }
  }

  _checkSpare () {
    if (!this.isStrike() && this.frameScore() === 10) {
      this._spare = true
      this._complete = true
    }
  }

  _checkRollsFinished () {
    if (this.roll === 2) {
      this._complete = true
    }
  }

  _addBonusScore (num) {
    this._score.push(num)
  }
}

module.exports = Frame

},{}]},{},[1])(1)
});
