function Round() {
  this.rollOne = null;
  this.rollTwo = null;
  this.roundScore = 0;
  this.result = [];
  this.isInProgress = true;
}

Round.prototype.trackPins = function(pins) {
  if(this.rollOne === null) {
    this.rollOne = pins;
    this.result.push(pins);
  } else if(this.rollTwo === null) {
    this.rollTwo = pins;
    this.result.push(pins);
  }
  console.log("trackPins is running");
  this.updateProgress();
}

Round.prototype.updateProgress = function() {
  if(this.rollOne === null || this.rollTwo === null) {
    console.log("updateProgress is running & will set isInProgress to true");
    return (this.isInProgress = true);
  } else {
    console.log("updateProgress is running & will set isInProgress to false");
    return (this.isInProgress = false);
  }
}

Round.prototype.isFull = function() {
  console.log("isFull is running");
  this.updateProgress();
  return !(this.isInProgress);
}

Round.prototype.giveScore = function() {
  this._calculateScore();
  return this.roundScore;
}

Round.prototype.giveResult = function() {
  return this.result;
}

Round.prototype._calculateScore = function() {
  this.roundScore = this.rollOne + this.rollTwo;
}
