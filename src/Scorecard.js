'use strict'

function Scorecard () {
  this._frameScores = []
  this._normalPoints = 0
  this._frameNumber = -1
  this._bonusPoints = 0
}

Scorecard.prototype.frameScores = () => {
  return this._frameScores
}

Scorecard.prototype.recordFrameScore = function (frame) {
  let error = 'Cannot record frame: 10 frames already recorded'
  if (this._frameScores.length >= 10) throw new Error(error)
  this._normalPoints += (frame._score[0] + frame._score[1])
  this._frameNumber++
  return this._frameScores.push(frame._score)
}

Scorecard.prototype.calculateBonusPoints = function () {
  let currentFrame = this._frameNumber
  let previousFrame = this._frameNumber - 1
  let previousScore = this._frameScores[previousFrame][0] + this._frameScores[previousFrame][1]
  if (previousScore === 10) {
    this._bonusPoints += this._frameScores[currentFrame][0]
  }
}

Scorecard.prototype.calculateNormalPoints = function () {
  return this._normalPoints = [].concat(...this._frameScores).reduce((acc, curr) => acc + curr)
}
