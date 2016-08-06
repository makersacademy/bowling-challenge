Frame = function(){
  this.rollNumber = 1;
  this.isComplete = false;
  this.pinsStanding = 10;
  this.knockedPinsOne = 0;
  this.knockedPinsTwo = 0;
  this.strike = false;
};

Frame.prototype.getRollNumber = function () {
  return this.rollNumber;
};

// Do I need this and the isComplete property in constructor??
Frame.prototype.isFrameFinished = function () {
  return this.isComplete;
};

Frame.prototype.rollOne = function () {
  this.knockedPinsOne = Math.floor(Math.random() * (this.pinsStanding + 1));
  this.pinsStanding -= this.knockedPinsOne;
  if (this.pinsStanding === 0) {
    this.strike = true;
  } else {
    this.rollNumber = 2;
  };
};

Frame.prototype.rollTwo = function () {
  this.knockedPinsTwo = Math.floor(Math.random() * (this.pinsStanding + 1));
};

Frame.prototype.getKnockedPinsOne = function () {
  return this.knockedPinsOne;
};

Frame.prototype.getKnockedPinsTwo = function () {
  return this.knockedPinsTwo;
};

Frame.prototype.getPinsStanding = function () {
  return this.pinsStanding;
};

Frame.prototype.getStrike = function () {
  return this.strike;
};

// Come back and sort this!
Frame.prototype.playFrame = function () {
  this.rollOne();
  if (this.getRollNumber() === 2) this.rollTwo();
  return [this.knockedPinsOne, this.knockedPinsTwo];
};
