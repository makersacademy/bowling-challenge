function Player() {
  this.score = 0;
}

Player.prototype.newGame = function(game) {
  this.currentGame = game;
}

Player.prototype.roll = function(number) {
  this.currentGame.addFrame();
  this.currentGame.scores.push(number);
  var hash = {};
  hash[this.currentGame.currentFrame().toString()] = number;
  this.currentGame.hashes.push(hash);
}
