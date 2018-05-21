var Frame = function () {
  this._score = {}
  this._pins = [10, 10]
  this._hits = 0
  this._spares = 0
  this._strikes = 0
}

Frame.prototype.add = function (ball, score) {
  this._score[ball] = score
}

Frame.prototype.newBall = function (number) {
  if (this._hits >= 2) {
    throw 'Frame had two hits.'
  }
  if (this._hits === 0 && number === 10) {
    this._strikes ++
    console.log(this._strikes)
    return ['strike']
  }
  this._pins[this._hits] -= number
  this._hits ++
}
