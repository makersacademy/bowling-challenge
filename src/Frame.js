Frame = function(){
  this.rollNumber = 1;
  this.isComplete = false;
  this.pinsStanding = 10;
  this.knockedPins = 0;
};

Frame.prototype.getRollNumber = function () {
  return this.rollNumber;
};

Frame.prototype.isFrameFinished = function () {
  return this.isComplete;
};

Frame.prototype.rollOne = function () {
  this.knockedPins = Math.floor((Math.random() * this.pinsStanding) + 1);
  this.pinsStanding -= this.knockedPins;
  if (this.pinsStanding === 0) {
    this.isComplete = true;
  } else {
    this.rollNumber = 2;
  };
};

Frame.prototype.rollTwo = function () {
  this.knockedPins += Math.floor((Math.random() * this.pinsStanding) + 1);
  this.isComplete = true;
};

Frame.prototype.getKnockedPins = function () {
  return this.knockedPins;
};

Frame.prototype.getPinsStanding = function () {
  return this.pinsStanding;
};
