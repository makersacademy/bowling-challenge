function Game () {
  this.scoresheet = [];
  this.frameCount = 1;
  this.rollCount = 1;
};

Game.prototype.rollResult = function(pinsKnocked) {
  if(this.rollCount === 1) {
    this.scoresheet['Frame ' + this.frameCount] = []
    this.scoresheet['Frame ' + this.frameCount]['Roll ' + this.rollCount] = pinsKnocked;
    this.rollCount = 2;
  } else if(this.rollCount === 2) {
    this.scoresheet['Frame ' + this.frameCount]['Roll ' + this.rollCount] = pinsKnocked;
    this.rollCount = 1;
  };
};