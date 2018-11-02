function Game() {
  this.scores = [];
}

Game.prototype.addScore = function (score) {
  this.scores.push(score);
};
