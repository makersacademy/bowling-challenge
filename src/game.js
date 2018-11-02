function Game() {
  this.scores = [];
  this.FRAMES = 10;
  this.rollsPerFrame = 2;
  this.PINS = 10;
}

Game.prototype.addScore = function (score) {
  this.scores.push(score);
};
