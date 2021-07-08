var Frame = function(id) {
  this.score = null;
  this.ball1 = null;
  this.ball2 = null;
  this.strike = false;
  this.spare = false;
  this.complete = false;
  this.frameId = id;
  this.bonus = 0;
};

Frame.prototype.setBall1 = function(numberOfPins) {
  this.ball1 = numberOfPins;
  this.score = this.ball1;
  if (this.ball1 === 10) {
    this.strike = true;
    this.complete = true;
    this.bonus = 2;
  };
};

Frame.prototype.setBall2 = function(numberOfPins) {
  this.ball2 = numberOfPins;
  this.score = this.score + this.ball2;
  if (this.score === 10) {
    this.spare = true;
    this.bonus = 1;
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
      || this.strike === true || this.spare === true) {
    this.complete = true;
    return true;
  } else {
    return false;
  }
};

Frame.prototype.bonusCheck = function (previousFrame, doubleStrikeFrame, numberOfPins) {
  // console.log('Bonus check');
  // console.log(previousFrame);
  if (previousFrame.bonus > 0) {
    console.log('Previous frame has bonus: ');
    console.log(previousFrame.bonus);
    console.log(previousFrame);
    previousFrame.bonus;
    previousFrame.score = previousFrame.score + numberOfPins;
    previousFrame.bonus = previousFrame.bonus - 1;
    console.log('double:');
    // console.log(doubleStrikeFrame.bonus);
  } ;
  if (doubleStrikeFrame && doubleStrikeFrame.bonus > 0) {
    console.log('there was a double strike');
    doubleStrikeFrame.score = doubleStrikeFrame.score + numberOfPins;
    doubleStrikeFrame.bonus = doubleStrikeFrame.bonus - 1;
  };
};
