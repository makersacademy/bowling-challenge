function Frame() {
  this.inProgress = true;
  this.rollCount  = 0;
  this.pinsLeft   = 10;
}

Frame.prototype.registerRoll = function(pins) {
  this.rollCount++;
  this.pinsLeft -= pins;
};

Frame.prototype.checkStrike = function() {
  return this.rollCount === 1 && !this.pinsLeft;
};

Frame.prototype.checkSpare = function() {
  return this.rollCount === 2 && !this.pinsLeft;
};
