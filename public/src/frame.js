'use strict'

function Frame () {
  this.scores = []
}

Frame.prototype.addScore = function (score) {
  if (this.scores.length < 3) {
    this.scores.push(score)
  }
  this._closeFrameEarly()
}

Frame.prototype.calculateTotalScore = function () {
  const REDUCER = (accumulator, eachRollScore) => accumulator + eachRollScore
  return this.scores.reduce(REDUCER, 0)
}

Frame.prototype._closeFrameEarly = function () {
  if (this.scores.length === 2) {
    this._spareOrBetter()
  }
}

Frame.prototype._spareOrBetter = function () {
  if (this.calculateTotalScore() < 10) {
    this.scores.push(0)
  }
}

function frameFactory () {
  return new Frame()
}

// module.exports = Frame
module.exports = frameFactory
