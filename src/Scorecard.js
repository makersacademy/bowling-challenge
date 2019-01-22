'use strict'

function Scorecard () {
  this._frameScores = []
  this._frameStatus = 'normal'
  this._frameNumber = -1
  this._normalPoints = 0
  this._bonusPoints = 0
}

Scorecard.prototype.frameScores = () => {
  this._frameScores
}

Scorecard.prototype.recordFrameScore = function (frame) {
  let error = 'Cannot record frame: 10 frames already recorded'
  if (this._frameScores.length >= 10) throw new Error(error)
  this._frameNumber++
  this._normalPoints += (frame._score[0] + frame._score[1])
  if (this._frameStatus === 'strike') this._bonusPoints += (frame._score[0] + frame._score[1])
  if (this._frameStatus === 'spare') this._bonusPoints += frame._score[0]
  if (frame._score[0] === 10) {
    this._frameStatus = 'strike'
  } else if ((frame._score[0] + frame._score[1]) === 10) {
    this._frameStatus = 'spare'
  } else {
    this._frameStatus = 'normal'
  }
  this._frameScores.push(frame._score)
}

Scorecard.prototype.calculateNormalPoints = function () {
  this._normalPoints = [].concat(...this._frameScores).reduce((acc, curr) => acc + curr)
}
