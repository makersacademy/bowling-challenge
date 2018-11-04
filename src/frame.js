function Frame() {
  this._bowls = []
  this._score = 0
}

Frame.prototype.getScore = function () {
  return this._score
}
