function Frame(number) {
  this.currentFrame = number;
  this.currentRoll = 1;
  this.pinsStanding = 10;
  this.firstPinsDown = 0;
  this.secondPinsDown = 0;
}

Frame.prototype.getCurrentRoll = function() {
  return this.currentRoll;
};

Frame.prototype.getPinsStanding = function() {
  return this.pinsStanding;
};

Frame.prototype.firstRoll = function() {
  this.firstPinsDown = Math.floor(Math.random() * 11);
  this.pinsStanding -= this.firstPinsDown;
  this.currentRoll = 2;
};

Frame.prototype.getFirstPinsDown = function() {
  return this.firstPinsDown;
};

Frame.prototype.secondRoll = function() {
  this.secondPinsDown = Math.floor(Math.random() * (this.pinsStanding + 1));
  this.pinsStanding -= this.secondPinsDown;
};

Frame.prototype.getSecondPinsDown = function() {
  return this.secondPinsDown;
};

Frame.prototype.isStrike = function() {
  if (this.getFirstPinsDown() === 10) {
    return true;
  }
}

Frame.prototype.isSpare = function() {
  if ((this.getFirstPinsDown()) + (this.getSecondPinsDown()) === 10) {
    return true;
  }
};
