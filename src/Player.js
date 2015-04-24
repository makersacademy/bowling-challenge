var Player = function(optionalName) {
  this.game = null
  this.name = optionalName || null
};

Player.prototype.roll = function(pinsKnockedDown) {
  this.game.roll(pinsKnockedDown)
};

Player.prototype.score = function() {
  return this.game.runningScore();
};