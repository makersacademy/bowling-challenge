function Game() {
  this.scores = [];
  this.FRAMES = 10;
  this.rollsPerFrame = 2;
}

Game.prototype.addScore = function (score) {
  this.scores.push(score);
};
