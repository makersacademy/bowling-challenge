'use strict'

function ScoreTracker () {
  this._scoreSheet = []
}

ScoreTracker.prototype.add = function (score) {
  this._scoreSheet.push(score)
  return score
}

ScoreTracker.prototype.scoreSheet = function () {
  return this._scoreSheet
}
