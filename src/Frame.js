function Frame(number) {
  this.currentFrame = number;
  this.currentRoll = 1;
  this.standingPins = 10;
  this.firstRollDown = 0;
  this.secondRollDown = 0;
}

Frame.prototype.getCurrentRoll = function() {
  return this.currentRoll;
};

Frame.prototype.getRemainingPins = function () {
  return this.standingPins;
};

Frame.prototype.firstRoll = function() {
  this.firstRollDown = Math.floor(Math.random() * 11);
  this.standingPins -= this.firstRollDown;
  this.currentRoll = 2;
};

Frame.prototype.getPinsKnockedOne = function () {
  return this.firstRollDown;
};

Frame.prototype.secondRoll = function () {
  this.secondRollDown = Math.floor(Math.random() * (this.standingPins + 1));
  this.standingPins -= this.secondRollDown;
};

Frame.prototype.getPinsKnockedTwo = function () {
  return this.secondRollDown;
};

Frame.prototype.isStrike = function () {
  if (this.getPinsKnockedOne() === 10) {
    return true;
  }
};

Frame.prototype.isSpare = function () {
  if ((this.getPinsKnockedOne() + this.getPinsKnockedTwo()) === 10) {
    return true;
  }
};
