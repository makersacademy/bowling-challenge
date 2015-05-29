function Game(){
  this.score = 0;
  this.rollCount = 0;
};

Game.prototype.roll = function(pinsDown) {
  this.score += pinsDown;
  if (this.rollCount >= 20)  {
    throw "Game Over";
  }
  this.rollCount += 1;
};
