function Game() {
  this.score = 0
  this.frames = []
};

Game.prototype.bowl = function(pins, bowls = 1) {
  this.score += pins
};
