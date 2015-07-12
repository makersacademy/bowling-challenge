var Game = function() {
  this.frameCount = 1;
  // this.throwCount = 0; // do you need this?
  this.frameScore = [];
  this.cumulativeScore = 0;
};

Game.prototype.throw1 = function(pinsDown) {
  pins = parseInt(pinsDown)
  this.score1 = pins;
  if(pins == 10) {
    this.score2 = 0;
    this.calculateScore();
    this.calculateTotalScore(); // maybe move this elsewhere later when you aren't just trying to pass test?
  }
};

Game.prototype.throw2 = function(pinsDown) {
  pins = parseInt(pinsDown)
  this.score2 = pins;
  this.calculateScore();
  this.calculateTotalScore(); // maybe move this elsewhere later when you aren't just trying to pass test?
};

Game.prototype.calculateScore = function() {
    // pushes score1 and score 2 to the frameScore array
    this.frameScore.push(this.score1);
    this.frameScore.push(this.score2);
};

Game.prototype.calculateTotalScore = function() {
    total = this.score1 + this.score2;
    // this.cumulativeScore.push(total);
    this.cumulativeScore += total;
    return this.cumulativeScore;
};

// add something to end game when 10 frames reached
Game.prototype.nextFrame = function() {
  this.frameCount += 1;
};
