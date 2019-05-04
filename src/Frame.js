'use strict'

function Frame () {
  this._score = []
}

Frame.prototype.score = () => {
  this._score
}

Frame.prototype.roll = function (Number) {
  let errorOne = 'Cannot record roll: roll must be an number'
  let errorTwo = 'Cannot record roll: roll must be between 0-10'
  let errorThree = 'Cannot record more rolls: maximum rolls per frame is 2'
  var errorFour = 'Cannot record number: roll after strike must be 0'
  if (isNaN(Number)) throw new Error(errorOne)
  if (Number < 0 || Number > 10) throw new Error(errorTwo)
  if (this._score.length >= 2) throw new Error(errorThree)
  if (this._score[0] === 10 && Number != 0) throw new Error(errorFour)
  this._score.push(Number)
}
