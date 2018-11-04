function Frame() {
  this._bowls = []
  this._score = 0
}

Frame.prototype.getScore = function () {
  return this._score
}

Frame.prototype.getBowls = function () {
  return this._bowls
}
