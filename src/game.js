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
  if ( this.frameNumber === 1 ){
    this.score += pins;
  } else {
    this.isBonus(pins);
  }
  this.saveScore(pins);
  this.endTurn();
};

Game.prototype.isBonus = function(pins) {
  if ( this.rollNumber === 1 ){
    this.calculateBonus(pins);
  } else {
    this.score += pins;
  }
};

Game.prototype.calculateBonus = function(pins) {
  var roll1 = this.scoreCard[this.scoreCard.length - 2].pins
  var roll2 = this.scoreCard[this.scoreCard.length - 1].pins
  if (roll1 + roll2 === 10 ){
    bonus = 2;
    this.score += pins * 2;
  } else {
      this.score += pins;
  }
};


Game.prototype.saveScore = function(pins) {
  this.scoreCard.push({
    frame: this.frameNumber,
    roll: this.rollNumber,
    pins: pins
  });
};

Game.prototype.endTurn = function() {
  if (this.rollNumber === 1 ){
    this.rollNumber ++
  } else {
    this.rollNumber --
    this.frameNumber ++
  }
};
