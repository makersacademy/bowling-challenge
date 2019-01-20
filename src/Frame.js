'use strict'

function Frame () {
  this._score = []
}

Frame.prototype.score = () => {
  return this._score
}

Frame.prototype.roll = function (Number) {
  if (this._score.length >= 2) {
    let error = 'Cannot record 2 rolls: maximum rolls per frame is 2'
    throw new Error(error)
  } else {
  return this._score.push(Number)
  }
}
