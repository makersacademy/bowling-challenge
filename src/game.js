function Game() {
  this.frame = 1;
  this.score = 0
};

Game.prototype.updateScore = function(player){
  this.score += (player.downedPins())
};
