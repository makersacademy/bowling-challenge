function Frame () {
  this._hits = 0
  this._spares = 0
  this._strikes = 0
  this._score = []
  this._isScored = false
  this._isComplete = false
}

Frame.prototype.newBall = function (number) {
  if (this._hits >= 2) {
    throw 'Frame had two hits.'
  } else if (this._hits === 0) {
    if (number === 10) {
      this._strikes ++
      this._isComplete = true
    }
  } else if (this._hits === 1) {
    if (number + this._score[0] === 10) {
      this._spares ++
    }
    this._isComplete = true
  }
  this._score.push(number)
  this._hits ++
}

Frame.prototype.scored = function () {
  this._isScored = true
}

module.exports = Frame