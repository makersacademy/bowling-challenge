function Game() {
  this.score = 0
  this.frames = []
};

Game.prototype.bowl = function(pins, bowls = 1) {
  for(var i = 0; i < bowls; i++) {
    this.score += pins;
  };
};
