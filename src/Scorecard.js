'use strict'

function Scorecard () {
  this._frameScores = []
  this._frameStatus = 'normal'
  this._bonusPoints = 0
}

Scorecard.prototype.frameScores = () => {
  this._frameScores
}

Scorecard.prototype.recordFrameScore = function (frame) {
  let error = 'Cannot record frame: 10 frames already recorded'
  if (this._frameScores.length >= 10) throw new Error(error)

  if (this._frameStatus === 'strike' && frame._score[0] === 10) {
    this._bonusPoints += 20
  } else if (this._frameStatus === 'strike') {
    this._bonusPoints += (frame._score[0] + frame._score[1])
  } else if (this._frameStatus === 'spare') { 
    this._bonusPoints += frame._score[0]
  }

  this._frameStatus = (frame._score[0] === 10) ? 'strike' : (((frame._score[0] + frame._score[1]) === 10) ? 'spare' : 'normal')
  this._frameScores.push(frame._score)
}

Scorecard.prototype.calculateNormalPoints = function () {
  this._normalPoints = [].concat(...this._frameScores).reduce((acc, curr) => acc + curr)
}
