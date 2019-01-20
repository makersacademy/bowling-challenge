'use strict'

function Scorecard () {
  this._frameScores = []
  this._score = 0
}

Scorecard.prototype.frameScores = () => {
  return this._frameScores
}

Scorecard.prototype.recordFrameScore = function (frame) {
  return this._frameScores.push(frame._score)
}

Scorecard.prototype.calculateTotal = function () {
  const sum = [].concat(...this._frameScores).reduce((acc, curr) => acc + curr)
  return this._score = sum
}
