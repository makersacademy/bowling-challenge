var Game = function() {
  this.score = 0
  this.frameNumber = 1
  this.rollNumber = 1
  this.scoreCard = []
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
  this.score += pins
  this.scoreCard.push(4)
  this.endTurn()
};

Game.prototype.endTurn = function() {
  if (this.rollNumber === 1 ){
    this.rollNumber ++
  } else {
    this.rollNumber --
    this.frameNumber ++
  };
};
