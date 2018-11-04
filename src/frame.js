function Frame() {
  this._bowls = []
  this._score = 0
}

Frame.prototype.getScore = function () {
  return this._bowls.reduce(function (total, bowl) {
    return total + bowl
  }, 0)
}

Frame.prototype.getBowls = function () {
  return this._bowls
}

Frame.prototype.addBowl = function (pins) {
  this.getBowls().push(pins)
}

Frame.prototype.isFinished = function () {
  return this._bowls.length > 1 || this.isAStrike()
}

Frame.prototype.isAStrike = function() {
  return this._bowls.includes(10)
}
