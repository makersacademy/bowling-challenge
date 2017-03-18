function Game() {
  this.currentFrame = 1
  this.frameScore;
};

Game.prototype.rollBall = function() {
  this.frameScore = Math.floor(Math.random() * 11);
  this.currentFrame++;
};
