function FrameTen(firstRoll) {
  this.firstRoll = firstRoll;
  this.secondRoll = null;
  this.thirdRoll = null;
}

FrameTen.prototype = Object.create(Frame.prototype);

FrameTen.prototype.addRoll = function(rollValue) {
  if (this.secondRoll === null) {
    this.secondRoll = rollValue;
  } else if ((this.isStrike() || this.isSpare()) && this.thirdRoll === null) {
    this.thirdRoll = rollValue;
  }
}

FrameTen.prototype.total = function() {
  return this.firstRoll + this.secondRoll + this.thirdRoll;
}

FrameTen.prototype.isOngoing = function() {
  if (this.secondRoll === null) {
    return true;
  }
  else if ((this.isStrike() || this.isSpare()) && this.thirdRoll === null) {
    return true;
  }
  else {
    return false;
  }
}
