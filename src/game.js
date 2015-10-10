function Game() {
  this.frameIndex = -1; // -1 as 0 needs to be first index
}

Game.prototype.logRoll = function() {
  this.frameIndex += 1;
}
