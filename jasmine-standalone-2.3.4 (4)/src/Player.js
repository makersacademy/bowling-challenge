function Player() {
  this.score = 0;
}

Player.prototype.newGame = function(game) {
  this.currentGame = game;
}

Player.prototype.roll = function(number) {
  this.currentGame._addFrame();
  this.currentGame.rolls.push(number);
  this._addToPairs(number);
}

Player.prototype._addToPairs = function(number) {
  var hash = {};
  hash[this.currentGame._currentFrame().toString()] = number;
  this.currentGame.pairs.push(hash);
}
