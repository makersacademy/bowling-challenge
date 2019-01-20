'use strict'

function Scorecard () {
  this._frameScores = [] 
}

Scorecard.prototype.frameScores = () => {
  return this._frameScores
}

Scorecard.prototype.recordFrameScore = function (frame) {
  let frameScore = frame._score
  return this._frameScores.push(frameScore)
}

Scorecard.prototype.calculateTotal = () => {
}
