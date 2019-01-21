'use strict'

function Frame () {
  this._score = []
}

Frame.prototype.score = () => {
  return this._score
}

Frame.prototype.roll = function (Number) {
  let errorOne = 'Cannot record roll: roll must be an number'
  let errorTwo = 'Cannot record roll: roll must be between 0-10'
  let errorThree = 'Cannot record more rolls: maximum rolls per frame is 2'
  if (isNaN(Number)) throw new Error(errorOne)
  if (Number < 0 || Number > 10) throw new Error(errorTwo)
  if (this._score.length >= 2) throw new Error(errorThree)
  return this._score.push(Number)
}
