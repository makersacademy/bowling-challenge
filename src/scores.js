function Scores () {
  this._scoreHistory = []
}

Scores.prototype.addScore = function (score) {
  this._scoreHistory.push(score)
}
