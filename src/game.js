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

Game.prototype.getCurrentScoreCard = function() {
  return this.scoreCard;
};

Game.prototype.roll = function(pins) {
  this.score += pins
  this.scoreCard.push({pins: pins})
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

// {frame: this.frameNumber, roll: this.rollNumber, Pins: pins}
