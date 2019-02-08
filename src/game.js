'use strict'

var Frame = require('../src/frame')

function Game () {
  this.frameResults = []
  this.score = 0
  this.frameNumber = 0
};

Game.prototype.frameAdd = function (frameArr) {
  this.frameResults.push(frameArr)
  this.calculate(this.frameNumber)
  this.frameNumber += 1
}

Game.prototype.calculate = function (frameNumber) {
  var frame = new Frame()
  if (this.frameNumber === 1) {
    this.score += frame.frameScore(this.frameResults[frameNumber])
  } else if (this.frameNumber === 10) {
    // Endgame
  } else {
    // Normal frames
  }
}

module.exports = Game
