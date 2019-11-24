'use strict'

function ScoreTracker (calculate, onComplete) {
  this._scoreSheet = []
  this._calculate = calculate
  this._onComplete = onComplete
}

ScoreTracker.prototype.add = function (score) {
  // opening roll
  if (this._scoreSheet.length < 1) {
      if (score === 10) {
        this._scoreSheet.push([score, null])
      } else {
        this._scoreSheet.push([score])
      }
    return true
  }
  var openFrames = this._scoreSheet.length
  var latestFrame = this._scoreSheet[this._scoreSheet.length - 1]

  // before final frame
  if (openFrames < 10) {
    if (latestFrame.length === 1) {
      latestFrame.push(score)
    } else {
      if (score === 10) {
        this._scoreSheet.push([score, null])
      } else {
        this._scoreSheet.push([score])
      }
    }
    return true
  }

  // final frame
  if (openFrames === 10) {
    if (latestFrame.length === 1) {
      latestFrame.push(score)
    } else if (latestFrame.length < 4 && latestFrame[0] === 10) {
      latestFrame.push(score)
    } else if (latestFrame.length === 2 && latestFrame[0] + latestFrame[1] === 10) {
      latestFrame.push(score)
    } else {
      this._onComplete()
    }
    return true
  }
}

ScoreTracker.prototype.scoreSheet = function () {
  return this._scoreSheet
}

ScoreTracker.prototype.total = function () {
  return this._calculate(this._scoreSheet)
}
