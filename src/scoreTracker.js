'use strict'

function ScoreTracker (calculate) {
  this._scoreSheet = []
  this._calculate = calculate
}

ScoreTracker.prototype.add = function (score) {
  // first roll of the game
  if (this._scoreSheet.length < 1) {
    this._scoreSheet.push([score])
    return score
  }
  // all other rolls
  var lastFrame = this._scoreSheet[this._scoreSheet.length - 1]
  if (lastFrame.length > 1) {
    this._scoreSheet.push([score])
  } else {
    lastFrame.push(score)
  }
  return score
}

ScoreTracker.prototype.scoreSheet = function () {
  return this._scoreSheet
}

ScoreTracker.prototype.total = function () {
  return this._calculate(this._scoreSheet)
}
