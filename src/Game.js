function Game() {
  this.frames = [];
  this.bonusCount = 0;
}

Game.prototype.addScore = function(score) {
  this.frames.push([score]);
  if (score === 10) {
    this.bonusCount += 2;
  }
};
