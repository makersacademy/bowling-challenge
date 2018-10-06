function Game() {
  this.rolls = 0
}

Game.prototype.roll = function(pins) {
  this.rolls += pins
};

Game.prototype.score = function() {
  return this.rolls
}
