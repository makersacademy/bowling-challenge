function Frame() {
  this.score = 0;
  this.rollOneScore = 0;
  this.rollTwoScore = 0;
  this.isComplete = false;
  this.isStrike = false;
  this.isSpare = false;
  this.pendingScore = 0;
}

Frame.prototype.addRollOneScore = function(pins) {
  this.rollOneScore = pins;
  if(this.rollOneScore === 10) {
    this.isStrike = true;
    this.isComplete = true;
    this.pendingScore = this.rollOneScore;
  }
  else {
    this.score += this.rollOneScore;
  }
}

Frame.prototype.addRollTwoScore = function(pins) {
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
}
