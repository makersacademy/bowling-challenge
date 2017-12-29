function Frame() {
  this.frameScore = 0
  this.pinCount = 10
};

Frame.prototype.roll1 = function(pinsHit) {
  this.pinCount -= pinsHit
};

Frame.prototype.roll2 = function(pinsHit) {
  if (pinsHit > this.pinCount) {throw Error ("There aren't that many pins left!!")}
  this.pinCount -= pinsHit
};
