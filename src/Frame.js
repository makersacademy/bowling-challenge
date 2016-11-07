function Frame() {
  this.score = 0;
  this.rollOneScore = 0;
  this.rollTwoScore = 0;
  this.rollsCompleted = 0;
  this.isComplete = false;
  this.isStrike = false;
  this.isSpare = false;
  this.pendingScore = 0;
  this.bonusScore = 0;
}

Frame.prototype.addRollOneScore = function(pins) {
  this.rollOneScore = pins;
  if(this.rollOneScore === 10) {
    this._markAsStrike();
  }
  else {
    this.score += this.rollOneScore;
  }
  this.pinsRemaining = 10 - pins;
  this.rollsCompleted = 1;
}

Frame.prototype.addRollTwoScore = function(pins) {
  this.rollTwoScore = pins;
  if(this.rollOneScore + this.rollTwoScore === 10) {
    this._markAsSpare();
  }
  else {
    this.score += this.rollTwoScore;

  }
  this.pinsRemaining -= pins;
  this.rollsCompleted = 2;
  this.isComplete = true;
}

Frame.prototype._markAsStrike = function() {
  this.isStrike = true;
  this.isComplete = true;
  this.pendingScore = this.rollOneScore;
}

Frame.prototype._markAsSpare = function() {
  this.isSpare = true;
  this.pendingScore = 10;
  this.score -= this.rollOneScore;
}
