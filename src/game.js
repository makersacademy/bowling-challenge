'use strict'

var Frame = require('./frame')

function Game (frameClass = Frame) {
  this.frameClass = frameClass
  this.frames = []
  this.rolls = 0
}

Game.prototype.roll = function (rollScore) {
  this._makeNewFrame()
  this._increaseRollNumber(rollScore)
  this._sendFrames(rollScore)
}

Game.prototype.totalScore = function () {
  const REDUCER = (accumulator, eachFrame) => accumulator + eachFrame.totalScore()
  return this.frames.reduce(REDUCER, 0)
}

Game.prototype._makeNewFrame = function () {
  if (this.frames.length === 10) {
    return
  }
  if (this.rolls % 2 === 0) {
    this.frames.push(new this.frameClass())
  }
}

Game.prototype._increaseRollNumber = function (rollScore) {
  if (rollScore === 10) {
    this.rolls += 2
  } else {
    this.rolls += 1
  }
}

Game.prototype._sendFrames = function (rollScore) {
  for (let eachFrame of this.frames) {
    eachFrame.addScore(rollScore)
  }
}

module.exports = Game
