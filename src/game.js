function Game() {
  this.score = 0
}

Game.prototype.roll = function(pins) {
  this.score += pins;
}
