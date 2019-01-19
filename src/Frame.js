'use strict'

function Frame () {
  this._score = []
}

Frame.prototype.roll = function (Number) {
  return this._score.push(Number)
}

Frame.prototype.calculateFrameScore = function () {
  return ((this._score[0]) + (this._score[1]))
}
