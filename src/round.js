function Round() {
  this.rollOne = null;
  this.rollTwo = null;
  this.roundScore = 0;
  this.isInProgress = true;
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

Round.prototype.trackPins = function(pins) {
  if(this.rollOne === null) {
    this.rollOne = pins;
  } else if(this.rollTwo === null) {
    this.rollTwo = pins;
  }
  this.updateProgress();
}

Round.prototype._calculateScore = function() {
  this.roundScore = this.rollOne + this.rollTwo;
}

// public readers needed for rollOne and rollTwo?

// I just want something to give me some pins ...
// ... then I will keep track of them ...
// ... and return my score if I'm asked for it
