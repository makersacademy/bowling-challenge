'use strict'

var Frame = require('../src/frame')

function Game () {
  this.frameResults = []
  this.score = 0
  this.frame = 1
};

Game.prototype.totalScore = function (gameArr) {
  var i
  for (i = 0; i < 10; i++) {
    var frame = new Frame()
    this.score = frame.scoreFrame(gameArr[i], gameArr[i+1])
  }
  return this.score
}

Game.prototype.frameAdd = function (frameArr) {
  this.frameResults.push(frameArr)
}

module.exports = Game