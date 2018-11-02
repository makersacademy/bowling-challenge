function Game() {
  this.scores = [];
  this.frames = 10;
}

Game.prototype.addScore = function (score) {
  this.scores.push(score);
};
