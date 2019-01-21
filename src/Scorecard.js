'use strict'

function Scorecard () {
  this._frameScores = []
  this._score = 0
  // this._bonusPoints = 0
  // this._totalPoints = 0
}

Scorecard.prototype.frameScores = () => {
  return this._frameScores
}

Scorecard.prototype.recordFrameScore = function (frame) {
  let error = 'Cannot record frame: 10 frames already recorded'
  if (this._frameScores.length >= 10) throw new Error(error)
  return this._frameScores.push(frame._score)
}

Scorecard.prototype.calculateTotal = function () {
  const sum = [].concat(...this._frameScores).reduce((acc, curr) => acc + curr)
  return this._score = sum
}

// Scorecard.prototype.calculateBonus = function () {
  // const scoreList = [].concat(...this._frameScores)
  // if (scoreList[0] + scoreList[1] === 10)
    // this._bonus += scoreList[5]
// }
