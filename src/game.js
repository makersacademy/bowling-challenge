'use strict'

var Frame = require('./frame')
var Pins = require('./pins')

function createFrameObject () {
  return new Frame()
}
function Game (args) {
  if (args === undefined) args = {}
  if (args.frameFactory === undefined) args.frameFactory = createFrameObject
  if (args.pins === undefined) args.pins = new Pins()

  this.frameFactory = args.frameFactory
  this.frames = []
  this.needNewFrame = true
  this.pins = args.pins
}

Game.prototype.roll = function (rollScore) {
  this._isValidRoll(rollScore)
  this._makeNewFrame()
  this._sendFrames(rollScore)
  this._toggleNeedNewFrame(rollScore)
  this._pins().managePins(rollScore)
}

Game.prototype.calculateTotalScore = function () {
  const REDUCER = (accumulator, eachFrame) => accumulator + eachFrame.calculateTotalScore()
  return this.frames.reduce(REDUCER, 0)
}

Game.prototype._makeNewFrame = function () {
  if (this.frames.length === 10) {
    return
  }
  if (this.needNewFrame) {
    this.frames.push(this.frameFactory())
  }
}

Game.prototype._toggleNeedNewFrame = function (rollScore) {
  if (rollScore !== 10) {
    this.needNewFrame = !this.needNewFrame
  }
}

Game.prototype._sendFrames = function (rollScore) {
  for (let eachFrame of this.frames) {
    eachFrame.addScore(rollScore)
  }
}

Game.prototype._isValidRoll = function (score) {
  if (isNaN(score)) {
    throw new Error('Not a Number')
  }
  this._pins().isImpossibleScore(score)
}

Game.prototype._pins = function () {
  return this.pins
}

module.exports = Game
