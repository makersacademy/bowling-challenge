function Game() {
  this.score = 0;
  this.frame = 1;
}


Game.prototype.gameScore = function() {
  return this.score;
}

Game.prototype.currentFrame = function() {
  return this.frame;
}
