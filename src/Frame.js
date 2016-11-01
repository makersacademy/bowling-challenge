function Frame() {
  this.score = 0;
  this.rollOneScore = 0;
  this.rollTwoScore = 0;
  this.rollNumber = 1;
  this.isComplete = false;
  this.isStrike = false;
  this.isSpare = false;
  this.pendingScore = 0;
}

// rollNumber is untested - although it works in the console.

Frame.prototype.addRollOneScore = function(pins) {
  this.rollNumber = 1;
  this.rollOneScore = pins;
  if(this.rollOneScore === 10) {
    this.isStrike = true;
    this.isComplete = true;
    this.pendingScore = this.rollOneScore;
  }
  else {
    this.score += this.rollOneScore;
    this.pinsRemaining = 10 - pins;
  }
}

Frame.prototype.addRollTwoScore = function(pins) {
  this.rollNumber = 2;
  this.rollTwoScore = pins;
  if(this.rollOneScore + this.rollTwoScore === 10) {
    this.isSpare = true;
    this.pendingScore = 10;
    this.score -= this.rollOneScore;
  }
  else {
    this.score += this.rollTwoScore;
  }
  this.isComplete = true;
  this.pinsRemaining = 10
}
