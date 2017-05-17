function Game() {
  this.score = 0;
  this.frame = 1;
  this.hitPins = 0;
  this.DEFAULT_PINS = 10;
}

Game.prototype.play = function() {

}

Game.prototype.gameScore = function() {
  return this.score;
}

Game.prototype.currentFrame = function() {
  return this.frame;
}

Game.prototype.hitPins = function() {
  return this.hitPins;
}
