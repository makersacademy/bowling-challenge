function Frame(frameNumber) {
  this.frameNumber = frameNumber;
  this.remainingPins = 10;
  this.score = 0;
  this.complete = false;
  this.bowls = [];
  this.bowlsToDouble = 0;

};

Frame.prototype.bowl = function(x) {
  this.remainingPins -= x;
  this.bowls.push(x);
  this.score += x;
  if (this.remainingPins == 0)
  {
    this.bowlsToDouble = 3 - this.numberOfBowls();
  }
  if(this.frameComplete()) { this.complete = true; }
};

Frame.prototype.frameComplete = function() {
  var finalFrameOver = this.frameNumber == 10 && this.bowlsToDouble == 0  && this.numberOfBowls() > 0;
  var frameOver = this.frameNumber != 10 && (this.numberOfBowls() == 2 || this.remainingPins == 0);
  if (finalFrameOver || frameOver) {
    return true;
  }
  return false;
}

Frame.prototype.numberOfBowls = function() {
  return this.bowls.length;
}

Frame.prototype.showScore = function() {
  return this.bowlsToDouble == 0
}

Frame.prototype.isSpare = function() {
  return this.numberOfBowls() > 1 && this.bowls[0]+this.bowls[1] == 10
}

Frame.prototype.getScore = function() {
  // strikes are handled in index.html
  if (this.frameNumber == 10 && this.numberOfBowls == 3) {
    if (this.isSpare()) { return [this.bowls[0],'/', this.bowls[2]] }
    return  this.bowls
  }
  if (this.isSpare() == true) { return [this.bowls[0], '/']}
  return this.bowls
}
