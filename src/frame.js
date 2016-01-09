function Frame() {
  this.remainingPins = 10;
  this.frameScore    = [0,0,0];
  this.knockedPins   = 0;
}


Frame.prototype.startFrame = function (frameNumber, roll) {
  this.frameScore[roll-1] = this.getKnockedPins();
  this.frameScore[2] += this.getKnockedPins();
};

Frame.prototype.getKnockedPins = function () {
  return this.knockedPins;
};

Frame.prototype.setKnockedPins = function (number) {
  this.knockedPins = number;
  this.remainingPins -= this.knockedPins;
};

Frame.prototype.getTotal = function () {
  return this.frameScore[2];
};

Frame.prototype.resetFrame = function () {
  this.remainingPins = 10;
  this.frameScore    = [0,0,0];
  this.knockedPins   = 0;
};
