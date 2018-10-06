'use strict'

function Frame () {
  this.scores = []
}

Frame.prototype.addScore = function (score) {
  if (this.scores.length < 3) {
    this.scores.push(score)
  }
  if (this.scores.length === 2) {
    this._spareOrBetter()
  }
}

Frame.prototype._spareOrBetter = function () {
  const REDUCER = (accumulator, currentValue) => accumulator + currentValue;
  if (this.scores.reduce(REDUCER) < 10) {
    this.scores.push(0)
  }
}
module.exports = Frame
