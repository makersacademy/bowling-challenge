'use strict'

function Frame () {
  this._score = []
}

Frame.prototype.score = () => {
  return this._score
}

Frame.prototype.roll = function (Number) {
  return this._score.push(Number)
}
