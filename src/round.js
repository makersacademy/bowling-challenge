function Round() {
  this.rollOne = null;
  this.rollTwo = null;
  this.roundScore = 0;
  this.isInProgress = true;
}

Round.prototype.trackPins = function(pins) {
  if(this.rollOne === null) {
    this.rollOne = pins;
  } else if(this.rollTwo === null) {
    this.rollTwo = pins;
  }
  this.updateProgress();
}

Round.prototype.updateProgress = function() {
  if(this.rollOne === null || this.rollTwo === null) {
    return (this.isInProgress = true);
  } else {
    return (this.isInProgress = false);
  }
}

Round.prototype.giveScore = function() {
  this._calculateScore();
  return this.roundScore;
}

Round.prototype._calculateScore = function() {
  this.roundScore = this.rollOne + this.rollTwo;
}
