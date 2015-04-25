var Game = function() {
  this.frame = 1;
  this.ball = 1;
  this.score = 0;
}

Game.prototype.bowl = function(knockedDown) {
  this.score += knockedDown;
  if(this.ball === 2) { this.frame += 1 };
  this.ball === 1 ? this.ball = 2 : this.ball = 1;
};