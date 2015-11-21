function Frame(frameNumber) {
  this.frameNumber = frameNumber;
  this.totalForFrame = null;
  this.lastBallRolled = 0;
  this.balls = [0,0,0];
  this.scoreCalculated = false;
}

Frame.prototype.setBall = function(pins) {
  this.balls[this.lastBallRolled++] = pins;
}

Frame.prototype.finalise = function(total) {
  this.totalForFrame = total;
  this.scoreCalculated = true;
}

Frame.prototype.scoreCanBeFinalised = function() {
  return ((this.lastBallRolled > 1) && (this.total() < 10));
}

Frame.prototype.isStrike = function() {
  return ((this.lastBallRolled === 1) && (this.total() === 10));
}

Frame.prototype.isSpare = function() {
  return ((this.lastBallRolled === 2) && (this.total() === 10));
}

Frame.prototype.total = function() {
  return this.balls.reduce(function(a, b) { return a + b; });
}

