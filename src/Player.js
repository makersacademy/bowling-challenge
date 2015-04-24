var Player = function() {
  this.game = null
};

Player.prototype.roll = function(pinsKnockedDown) {
  this.game.roll(pinsKnockedDown)
};

Player.prototype.score = function() {
  return this.game.runningScore();
};