TenthFrame = function(){
  this.isComplete = false;
  this.pinsStanding = 10;
  this.rollNumber = 1;
  this.knockedPinsOne = 0;
  this.knockedPinsTwo = 0;
  this.knockedPinsThree = 0;
};

TenthFrame.prototype.isFrameFinished = function () {
  return this.isComplete;
};

TenthFrame.prototype.getPinsStanding = function () {
  return this.pinsStanding;
};

TenthFrame.prototype.getRollNumber = function () {
  return this.rollNumber;
};

TenthFrame.prototype.rollOne = function () {
  this.knockedPinsOne = Math.floor(Math.random() * (this.pinsStanding + 1));
  if (this.knockedPinsOne === 10) {
    this.pinsStanding = 10;
  } else {
    this.pinsStanding -= this.knockedPinsOne;
  };
  this.rollNumber = 2;
};

TenthFrame.prototype.rollTwo = function () {
  this.knockedPinsTwo = Math.floor(Math.random() * (this.pinsStanding + 1));
  this.pinsStanding -= this.knockedPinsTwo;
  if (this.pinsStanding === 0) {
    this.rollNumber = 3;
  } else {
    return;
  };
};

TenthFrame.prototype.rollThree = function () {
  this.knockedPinsThree = Math.floor(Math.random() * (this.pinsStanding + 1));
};

Frame.prototype.playTenthFrame = function () {
  this.rollOne();
  return [10,10,10];
};
