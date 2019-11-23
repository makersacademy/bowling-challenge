'use strict'

function ScoreTracker (calculate) {
  this._scoreSheet = []
  this._calculate = calculate
}

ScoreTracker.prototype.add = function (score) {
  if (this._scoreSheet.length < 1) {
    return this._newFrame(score)
  }
  var latestFrame = this._scoreSheet[this._scoreSheet.length - 1]
  if (latestFrame.length > 1) {
    return this._newFrame(score)
  } else {
    return this._addToFrame(score)
  }
}

ScoreTracker.prototype._newFrame = function (score) {
  this._scoreSheet.push([score])
  return score
}

ScoreTracker.prototype._addToFrame = function (score) {
  var latestFrame = this._scoreSheet[this._scoreSheet.length - 1]
  latestFrame.push(score)
  if (this._scoreSheet.length === 10) {
    return this._finalFrame(score)
  } else {
    return score
  }
}

ScoreTracker.prototype._finalFrame = function (score) {
  return this.total()
      // console.log(JSON.stringify(this._scoreSheet))
      // console.log('final frame complete!')
      // if (latestFrame[0] + latestFrame[1] === 10) {
        // console.log('TODO: bonus rolls')
      // } else {
        // return this.total()
      // }
}

ScoreTracker.prototype.scoreSheet = function () {
  return this._scoreSheet
}

ScoreTracker.prototype.total = function () {
  return this._calculate(this._scoreSheet)
}
