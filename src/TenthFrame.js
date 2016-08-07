TenthFrame = function(){
  this.pinsStanding = 10;
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

TenthFrame.prototype.rollOne = function () {
  this.knockedPinsOne = Math.floor(Math.random() * (this.pinsStanding + 1));
  if (this.knockedPinsOne === 10) {
    this.pinsStanding = 10;
  } else {
    this.pinsStanding -= this.knockedPinsOne;
  };
};

TenthFrame.prototype.rollTwo = function () {
  this.knockedPinsTwo = Math.floor(Math.random() * (this.pinsStanding + 1));
  this.pinsStanding -= this.knockedPinsTwo;
};

TenthFrame.prototype.rollThree = function () {
  this.pinsStanding = 10;
  this.knockedPinsThree = Math.floor(Math.random() * (this.pinsStanding + 1));
};

TenthFrame.prototype.playTenthFrame = function () {
  this.rollOne();
  this.rollTwo();
  if (this.pinsStanding === 0) this.rollThree();
  return [this.knockedPinsOne, this.knockedPinsTwo, this.knockedPinsThree];
};
