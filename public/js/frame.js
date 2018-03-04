var Frame = function(id) {
  this.score = null;
  this.ball1 = null;
  this.ball2 = null;
  this.strike = false;
  this.spare = false;
  this.complete = false;
  this.frameId = id;
};

Frame.prototype.setBall1 = function(numberOfPins) {
  this.ball1 = numberOfPins;
  if (this.ball1 === 10) {
    this.strike = true;
  };
};

Frame.prototype.setBall2 = function(numberOfPins) {
  this.ball2 = numberOfPins;
  this.score = this.ball1 + this.ball2;
  if (this.score === 10) {
    this.spare = true;
  };
};

Frame.prototype.setScore = function() {
  // this.score =
};
Frame.prototype.getScore = function() {
  return this.score;
};

Frame.prototype.getStrike = function() {
  return this.strike;
};

Frame.prototype.isComplete = function() {
  if (this.score < 10 && this.ball2 != null
      || this.strike === true) {
    console.log(this.score);
    this.complete = true;
    return true;
  } else {
    return false;
  }
};
