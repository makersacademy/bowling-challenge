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
    this.completeFrame();
  } else {
    this.rollNumber = 2;
  };
};

Frame.prototype.rollTwo = function () {
  this.knockedPins += Math.floor((Math.random() * this.pinsStanding) + 1);
  this.completeFrame();
};

Frame.prototype.getKnockedPins = function () {
  return this.knockedPins;
};

Frame.prototype.getPinsStanding = function () {
  return this.pinsStanding;
};

Frame.prototype.completeFrame = function (arguments) {
  this.isComplete = true;
  this.rollNumber = 1;
  this.pinsStanding = 10;
};
