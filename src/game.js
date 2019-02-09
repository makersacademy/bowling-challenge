'use strict'

var Frame = require('../src/frame')

var add = (a, b) =>
  a + b



function Game () {
  this.frameResults = []
  this.frameScores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  this.totalScore = 0
  this.frameNumber = 0
  this.lastFrameNumber = -1
};

Game.prototype.frameAdd = function (frameArr) {
  this.frameResults.push(frameArr)
  this.calculate2(this.frameNumber)
  this._incrementFrame()
  this.totalScore = this.frameScores.reduce(add)
}

Game.prototype.calculate = function () {
  var frame = new Frame()
  if (this.frameNumber === 0) {
    this.totalScore += frame.frameScore(this.frameResults[this.frameNumber])
  } else if (this.framenumber === 1) {
    this.totalScore += frame.frameScore(this.frameResults[this.frameNumber])
    this._bonusCalc()
  } else if (this.frameNumber === 10) {
    this._bonusCalc()
  } else {
    this.totalScore += frame.frameScore(this.frameResults[this.frameNumber])
    this._bonusCalc()
    this._doubleStrikeCalc()
  }
}

Game.prototype.calculate2 = function () {
  var frame = new Frame()
  if (this.frameNumber === 0) {
    this.frameScores[this.frameNumber] += frame.frameScore(this.frameResults[this.frameNumber])
  } else if (this.framenumber === 1) {
    this.frameScores[this.frameNumber] += frame.frameScore(this.frameResults[this.frameNumber])
    this._bonusCalc2()
  } else if (this.frameNumber === 10) {
    this._bonusCalc2()
  } else {
    this.frameScores[this.frameNumber] += frame.frameScore(this.frameResults[this.frameNumber])
    this._bonusCalc2()
    this._doubleStrikeCalc()
  }
}

Game.prototype._bonusCalc2 = function () {
  var frame = new Frame()
  if (frame.isStrike(this.frameResults[this.lastFrameNumber])) {
    this.frameScores[this.lastFrameNumber] += frame.strikeBonus(this.frameResults[this.frameNumber])
  } else if (frame.isSpare(this.frameResults[this.lastFrameNumber])) {
    this.frameScores[this.lastFrameNumber] += frame.spareBonus(this.frameResults[this.frameNumber])
  }
}

Game.prototype._incrementFrame = function () {
  this.frameNumber += 1
  this.lastFrameNumber += 1
}

Game.prototype._bonusCalc = function () {
  var frame = new Frame()
  if (frame.isStrike(this.frameResults[this.lastFrameNumber])) {
    this.totalScore += frame.strikeBonus(this.frameResults[this.frameNumber])
  } else if (frame.isSpare(this.frameResults[this.lastFrameNumber])) {
    this.totalScore += frame.spareBonus(this.frameResults[this.frameNumber])
  }
}

Game.prototype._doubleStrikeCalc = function () {
  var frame = new Frame()
  if (frame.isStrike(this.frameResults[this.frameNumber]) && frame.isStrike(this.frameResults[this.lastFrameNumber])) {
    this.totalScore += 10
  }
}

module.exports = Game
