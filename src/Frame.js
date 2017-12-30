function Frame() {
  this.score = 0
  this.completed = false
  this.rollCount = 0
};

Frame.prototype.roll1 = function(pinsHit) {
  this.score += pinsHit
  this.rollCount += 1
  if(pinsHit === 10) {
    this.completed = true
  }
};

Frame.prototype.roll2 = function(pinsHit) {
  if (pinsHit + this.score > 10) {throw Error ("There aren't that many pins left!!")} // might cause problems later with strike scoring!!
  if (this.completed === false) {
    this.score += pinsHit
    this.rollCount += 1
    this.completed = true
  }
};

Frame.prototype.isAStrike = function() {
  if(this.rollCount === 1 && this.score === 10) {
    return true
  }
};

Frame.prototype.isASpare = function() {
  if(this.rollCount === 2 && this.score === 10) {
    return true
  }
};

Frame.prototype.calculateFrameScore = function() {
  return(this.score)
};
