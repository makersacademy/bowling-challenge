'use strict'

var Frame = require('../src/frame')

function Game () {
  this.frameResults = []
  this.score = 0
  this.frameNumber = 0
  this.lastFrameNumber = -1
};

Game.prototype.frameAdd = function (frameArr) {
  this.frameResults.push(frameArr)
  this.calculate(this.frameNumber)
  this._incrementFrame()
}

Game.prototype.calculate = function (frameNumber) {
  var frame = new Frame()
  if (this.frameNumber === 0) {
    this.score += frame.frameScore(this.frameResults[frameNumber])
  } else if (this.frameNumber === 9) {
    this._endFrameScore()
  } else {
    this.score += frame.frameScore(this.frameResults[this.frameNumber])
    if (frame.isStrike(this.frameResults[this.lastFrameNumber])) {
      this.score += frame.strikeBonus(this.frameResults[this.frameNumber])
    } else if (frame.isSpare(this.frameResults[this.lastFrameNumber])) {
      this.score += frame.spareBonus(this.frameResults[this.frameNumber])
    }
  }
}

Game.prototype._incrementFrame = function () {
  this.frameNumber += 1
  this.lastFrameNumber += 1
}

Game.prototype._endFrameScore = function () {
  var frame = new Frame()
  this.score += frame.frameScore(this.frameResults[9])
  if (frame.isStrike(this.frameResults[8])) {
    this.score += frame.strikeBonus(this.frameResults[9])
  } else if (frame.isSpare(this.frameResults[8])) {
    this.score += frame.spareBonus(this.frameResults[9])
  }
}

module.exports = Game
