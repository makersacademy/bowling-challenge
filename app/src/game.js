function Game(player) {
  this.player = player;
  this.round = 0;
  this.over = false;
}

Game.prototype.play = function(score) {
  if(this.over) { return; }
  this.player.bowl(score, this.round);
  if(this.isOver()) { this.endGame(); }
  if(this.isRoundOver()) { this.nextRound(); }
};

Game.prototype.roll = function() {
  return this.player.roll(this.round);
}

Game.prototype.isRoundOver = function() {
  return this.player.isRoundOver(this.round);
};

Game.prototype.isOver = function() {
  return this.player.isFinished()
}

Game.prototype.endGame = function() {
  this.over = true;
}

Game.prototype.nextRound = function() {
  if(this.round === 9) { return; }
  this.round += 1;
};
