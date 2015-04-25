var Game = function() {
  this.frame = 1;
  this.ball = 1;
  this.score = 0;
}

Game.prototype.bowl = function(knockedDown) {
  this.score += knockedDown
};