function Game() {
  this.scores = []
  this.count = 0
}

Game.prototype.getScores = function () {
  return this.scores
}

Game.prototype.bowl = function (score) {
  this.scores.push(score)
}
