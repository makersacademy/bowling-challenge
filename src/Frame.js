function Frame() {
  this.firstRoll = 0;
  this.secondRoll = 0;
}

Frame.prototype.getFirstRoll = function() {
  return this.firstRoll
};

Frame.prototype.getSecondRoll = function() {
  return this.secondRoll
};


Frame.prototype.getFrameScore = function() {
  return this.firstRoll + this.secondRoll;
};
