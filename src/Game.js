function Game() {
  this.frameNumber = 1;
  this.score = new Score();
};

Game.prototype.bowl = function(n) {
  this.score.bowl(5);
};
