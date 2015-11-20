function Frame(frameNumber) {
  this.frameNumber = frameNumber;
  this.totalForFrame = null;
  this.currentBall = 1;
  this.balls = [0,0,0];
  this.scoreCalculated = false;
}

Frame.prototype.setBall = function(ball, pins) {
  this.balls[ball-1] = pins;
  this.currentBall = ball;
  if (this.scoreCanBeFinalised()) {
    this.finalise(this.total(this.total()));
  }
}

Frame.prototype.finalise = function(total) {
  this.totalForFrame = total;
  this.scoreCalculated = true;
}

Frame.prototype.scoreCanBeFinalised = function() {
  return ((this.currentBall > 1) && (this.total() < 10))
}

Frame.prototype.isStrike = function() {
  return this.balls[0] === 10;
}

Frame.prototype.isSpare = function() {
  return ((this.currentBall > 1) && (this.total() === 10))
}

Frame.prototype.firstTwoBalls = function() {
  return (this.balls[0] + this.balls[1]);
}

Frame.prototype.firstBall = function() {
  return this.balls[0];
}

Frame.prototype.secondBall = function() {
  return this.balls[1];
}
Frame.prototype.thirdBall = function() {
  return this.balls[2];
}

Frame.prototype.total = function() {
  return this.balls.reduce(function(a, b) { return a + b; });
}

