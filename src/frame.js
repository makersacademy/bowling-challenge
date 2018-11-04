function Frame() {
  this._bowls = []
  this._score = 0
}

Frame.prototype.getScore = function () {
  var score = this._bowls.reduce(function (total, bowl) {
    return total + bowl
  }, 0)
  return score
}

Frame.prototype.getBowls = function () {
  return this._bowls
}

Frame.prototype.addBowl = function (pins) {
  this.getBowls().push(pins)
}
