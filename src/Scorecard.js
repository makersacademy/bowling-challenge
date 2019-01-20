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
  return this._score = ((this._frameScores[0][0] + this._frameScores[0][1]))
}
