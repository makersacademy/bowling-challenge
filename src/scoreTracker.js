'use strict'

function ScoreTracker (calculate) {
  this._scoreSheet = []
  this._calculate = calculate
}

ScoreTracker.prototype.add = function (score) {
  this._scoreSheet.push(score)
  return score
}

ScoreTracker.prototype.scoreSheet = function () {
  return this._scoreSheet
}

ScoreTracker.prototype.total = function () {
  return this._calculate(this._scoreSheet)
}
