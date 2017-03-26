function Game() {
  this.score = 0;
  this.frames = 0;
}

Game.prototype.bowl = function() {
  if (this.frames === 10) {
    return "Game Over";
  } else {
    this.frames += 1;
  }
}
