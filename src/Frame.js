Frame = function(){
  this.pinsStanding = 10;
  this.knockedPinsOne = 0;
  this.knockedPinsTwo = 0;
  this.strike = false;
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

Frame.prototype.rollOne = function () {
  this.knockedPinsOne = Math.floor(Math.random() * (this.pinsStanding + 1));
  this.pinsStanding -= this.knockedPinsOne;
};

Frame.prototype.rollTwo = function () {
  this.knockedPinsTwo = Math.floor(Math.random() * (this.pinsStanding + 1));
};

Frame.prototype.playFrame = function () {
  this.rollOne();
  if (this.pinsStanding > 0) this.rollTwo();
  return [this.knockedPinsOne, this.knockedPinsTwo];
};
