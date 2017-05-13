function Game() {
  this.frameNumber = 1;
  this.scoreCard = new Score();
};

Game.prototype.bowl = function(n) {
  this.scoreCard.bowl(5);
};
