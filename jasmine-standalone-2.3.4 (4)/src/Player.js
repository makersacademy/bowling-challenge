function Player() {
  this.score = 0;
}

Player.prototype.play = function(game) {
  this.currentGame = game;
}

Player.prototype.roll = function(number) {
  this.currentRoll = number;
  this.currentGame.rolls.push(number);
  this.score = this.currentGame.sum();
}
