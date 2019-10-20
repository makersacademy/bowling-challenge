var Game = function() {
  this.score = 0
  this.frameNumber = 1
  this.rollNumber = 1
};

Game.prototype.getCurrentScore = function() {
  return this.score;
};

Game.prototype.getCurrentFrame = function() {
  return this.frameNumber;
};

Game.prototype.getCurrentRoll = function() {
  return this.rollNumber;
};

Game.prototype.roll = function(pins) {
  if (this.rollNumber < 2){
      this.rollNumber ++
    }
  this.score += pins

};
