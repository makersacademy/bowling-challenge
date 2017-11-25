function Game(){
  this.rolls = []
  this.currentRoll = 0;
};

Game.prototype.roll = function(pins){
  this.rolls[this.currentRoll++] = pins;
};

Game.prototype.sumOfBallsInFrame = function(frameIndex){
  return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
};
