'use strict'

function Frame () {
  this._score = []
}

Frame.prototype.score = () => {
  return this._score
}

Frame.prototype.roll = function (Number) {
  if (isNaN(Number)) {
    let errorOne = 'Cannot record roll: roll must be an number'
    throw new Error(errorOne)
  } else if (this._score.length >= 2) {
    let errorTwo = 'Cannot record more rolls: maximum rolls per frame is 2'
    throw new Error(errorTwo)
  } else {
  return this._score.push(Number)
  }
}
