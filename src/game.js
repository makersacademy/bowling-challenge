'use strict'

var Frame = require('../src/frame')

var add = (a, b) =>
  a + b

var frame = new Frame()

function Game () {
  this.frameResults = []
  this.frameScores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  this.totalScore = 0
  this.frameNumber = 0
  this.lastFrameNumber = -1
  this.secondLastFrameNumber = -2
};

Game.prototype.frameAdd = function (frameArr) {
  this.frameResults.push(frameArr)
  this._calculate()
  this._incrementFrame()
  this.totalScore = this.frameScores.reduce(add)
}

Game.prototype._calculate = function () {
  if (this.frameNumber === 0) {
    this._baseCalc()
  } else if (this.frameNumber === 1) {
    this._baseCalc()
    this._bonusCalc()
  } else if (this.frameNumber === 10) {
    this._bonusCalc()
    this._doubleStrikeCalc()
  } else {
    this._baseCalc()
    this._bonusCalc()
    this._doubleStrikeCalc()
  }
}

Game.prototype._baseCalc = function () {
  this.frameScores[this.frameNumber] += frame.frameScore(this.frameResults[this.frameNumber])
}

Game.prototype._bonusCalc = function () {
  if (frame.isStrike(this.frameResults[this.lastFrameNumber])) {
    this.frameScores[this.lastFrameNumber] += frame.strikeBonus(this.frameResults[this.frameNumber])
  } else if (frame.isSpare(this.frameResults[this.lastFrameNumber])) {
    this.frameScores[this.lastFrameNumber] += frame.spareBonus(this.frameResults[this.frameNumber])
  }
}

Game.prototype._doubleStrikeCalc = function () {
  if (this.frameNumber !== 10 && frame.isStrike(this.frameResults[this.lastFrameNumber]) && frame.isStrike(this.frameResults[this.secondLastFrameNumber])) {
    this.frameScores[this.secondLastFrameNumber] += 10
  } else if (this.frameNumber === 10 && frame.isStrike(this.frameResults[this.frameNumber]) && frame.isStrike(this.frameResults[this.lastFrameNumber])) {
    this.frameScores[this.secondLastFrameNumber] += 10
  }
}

Game.prototype._incrementFrame = function () {
  this.frameNumber++
  this.lastFrameNumber++
  this.secondLastFrameNumber++
}

// Game.prototype.roll = function (pinsHit) {
//   this.rolls.push(pinsHit)
//   if (this.frameNumber === 9) {
//     this.frameResults[this.frameNumber].push(pinsHit)
//     this.calculate()
//   } else if (pinsHit === 10) {
//     this.frameResults[this.frameNumber] = [10, 0]
//     this.calculate()
//     this._incrementFrame()
//   } else if (this.frameResults[this.frameNumber].length === 0 || undefined) {
//     this.frameResults[this.frameNumber] = [pinsHit, 0]
//   } else {
//     this.frameResults[this.frameNumber][1] = pinsHit
//     this.calculate()
//     this._incrementFrame()
//   }
//   this.totalScore = this.frameScores.reduce(add)
// }

module.exports = Game
