function Game () {
  this.score = 0;
  this.frame = 1;
};

Game.prototype.nextFrame = function() {
  this.frame ++
};
