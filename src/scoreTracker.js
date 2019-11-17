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
  var latestFrame = this._scoreSheet[this._scoreSheet.length - 1]
  if (latestFrame.length > 1) {
    this._scoreSheet.push([score])
    return score
  } else {
    latestFrame.push(score)
    // check if final frame
    if (this._scoreSheet.length === 10) {
      console.log(JSON.stringify(this._scoreSheet))
      console.log('final frame complete!')
      if (latestFrame[0] + latestFrame[1] === 10) {
        console.log('TODO: bonus rolls')
      } else {
        return this.total()
      }
    } else {
      return score
    }
  }
}

ScoreTracker.prototype.scoreSheet = function () {
  return this._scoreSheet
}

ScoreTracker.prototype.total = function () {
  return this._calculate(this._scoreSheet)
}

// ScoreTracker.prototype._isFinalFrame = function () {
  // return this._scoreSheet.length === 10
// }
//
  // if (this._isFinalFrame()) {
    // console.log('finalFrame')
    // return this.total()
  // } else {
    // console.log(this.scoreSheet())
    // console.log('notFinalFrame')
    // return score
  // }
