function Game(){
  this.score = 0;
};

Game.prototype.roll = function(pinsDown) {
  this.score += pinsDown;
};
