function Game () {
  this.scoresheet = [];
  this.frameCount = 1;
  this.rollCount = 1;
  this.score = 0;
};

Game.prototype.rollResult = function(pinsKnocked) {
  if(this.frameCount <= 10) {
    if(this.rollCount === 1) {
      this.logRoll1(pinsKnocked);
    } else if(this.rollCount === 2) {
      this.logRoll2(pinsKnocked);
    };
  };
};

Game.prototype.logRoll1 = function(pinsKnocked) {
  this.scoresheet['Frame ' + this.frameCount] = []
  this.scoresheet['Frame ' + this.frameCount]['Roll ' + this.rollCount] = pinsKnocked;
  this.score += pinsKnocked;
  this.rollCount = 2;
};

Game.prototype.logRoll2 = function(pinsKnocked) {
  this.scoresheet['Frame ' + this.frameCount]['Roll ' + this.rollCount] = pinsKnocked;
  this.score += pinsKnocked;
  this.rollCount = 1;
  this.frameCount += 1;
};