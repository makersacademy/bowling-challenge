'use strict'

function ScoreTracker (calculate) {
  this._scoreSheet = []
  this._calculate = calculate
}

ScoreTracker.prototype.add = function (score) {
  if (this._scoreSheet.length < 1) {
    this._scoreSheet.push([score])
    return true
  }
  var latestFrame = this._scoreSheet[this._scoreSheet.length - 1]
  if (this._scoreSheet.length === 10 && latestFrame.length === 2) {
    this._extraRoll(score, latestFrame)
  } else if (latestFrame.length > 1) {
      this._scoreSheet.push([score])
  } else {
    latestFrame.push(score)
  }
}

ScoreTracker.prototype._extraRoll = function (score, latestFrame) {
  // TODO
  console.log('bonus or error')
  throw 'Game complete'
}

ScoreTracker.prototype.scoreSheet = function () {
  return this._scoreSheet
}

ScoreTracker.prototype.total = function () {
  return this._calculate(this._scoreSheet)
}
