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
  // console.log(this.frameNumber)
  if (this.frameNumber === 0) {
    this.score += frame.frameScore(this.frameResults[frameNumber])
  } else if (this.frameNumber === 9) {
    this.score += frame.frameScore(this.frameResults[frameNumber])
    // if (frame.isStrike(this.frameResults[this.lastFrameNumber])) {
    //   // Endgame strike
    // } else if (frame.isSpare(this.frameResults[this.lastFrameNumber])) {
    //   // Endgame spare
    // }
  } else {
    this.score += frame.frameScore(this.frameResults[frameNumber])
    if (frame.isStrike(this.frameResults[this.lastFrameNumber])) {
      this.score += frame.strikeBonus(this.frameResults[this.lastFrameNumber])
    } else if (frame.isSpare(this.frameResults[this.lastFrameNumber])) {
      this.score += frame.spareBonus(this.frameResults[this.lastFrameNumber])
    }
  }
  console.log(this.score)
}

Game.prototype._incrementFrame = function () {
  this.frameNumber += 1
  this.lastFrameNumber += 1
}

module.exports = Game
