'use strict'

function ScoreTracker (calculate) {
  this._scoreSheet = []
  this._calculate = calculate
  this._bonusMode = false
}

ScoreTracker.prototype.add = function (score) {
  if (this._bonusMode) {
    console.log('bonus time')
    return score
  } else {
    console.log('calling normalAdd')
    this._normalAdd(score)
    return score
  }
}

ScoreTracker.prototype._normalAdd = function (score) {
  var lastIndex = this._scoreSheet.length - 1
  if (this._scoreSheet.length < 1) {
    this._scoreSheet.push([score])
  } else if (this._scoreSheet[lastIndex].length === 1) {
    this._scoreSheet[lastIndex].push(score)
  } else if (this._scoreSheet[lastIndex].length === 2) {
    this._scoreSheet.push([score])
  }
  return score
}

ScoreTracker.prototype.scoreSheet = function () {
  return this._scoreSheet
}

ScoreTracker.prototype.total = function () {
  return this._calculate(this._scoreSheet)
}
