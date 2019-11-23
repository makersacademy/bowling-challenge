'use strict'

function ScoreTracker (calculate) {
  this._scoreSheet = []
  this._calculate = calculate
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
    console.log(JSON.stringify(this.scoreSheet()))
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
      throw 'Game complete'
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
