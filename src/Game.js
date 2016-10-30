function Game() {
  this.frames = [];
}

Game.prototype.addScore = function(score) {
  this.frames.push([score]);
};
