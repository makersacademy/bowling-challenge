function Frame() {
  this.frameScore = 0
  this.pinCount = 10
  this.completed = false
  this.rollCount = 0
};

Frame.prototype.roll1 = function(pinsHit) {
  this.pinCount -= pinsHit
  this.rollCount += 1
  if(pinsHit === 10) {
    this.completed = true
  }
};

Frame.prototype.roll2 = function(pinsHit) {
  if (pinsHit > this.pinCount) {throw Error ("There aren't that many pins left!!")}
  if (this.completed === false) {
    this.pinCount -= pinsHit
    this.rollCount += 1
    this.completed = true
  }
};

Frame.prototype.isAStrike = function() {
  if(this.rollCount === 1 && this.pinCount === 0) {
    return true
  }
}
