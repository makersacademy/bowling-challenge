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
  if ( this.frameNumber > 1 ){
    if ( this.rollNumber === 1 ){
      var startingIndex = (this.scoreCard.length-3);
      var previousTwoRolls = this.scoreCard.slice(startingIndex, 2);

      //var roll1 = previousTwoRolls.shift().pins;
      //var roll2 = previousTwoRolls.shift().pins;
      if (roll1 + roll2 === 10 ){
        bonus = 2;
        this.score += (2 + 2);
      } else {
          this.score += pins;
      }
    } else {
      this.score += pins;
    }
  } else {
    this.score += pins;
  }
  this.saveScore(pins);
  this.endTurn();
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
