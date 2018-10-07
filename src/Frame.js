function Frame() {
  this.balls = [null, null];
  this.frameOver = false;
}

Frame.prototype.addBallScore = function(index,amount) {
  this.balls[index] = amount;
}

Frame.prototype.validateBallTotal = function() {
  var total = this.balls[0] + this.balls[1]
  return this.balls.reduce((a, b) => a + b, 0) > 10 ? false : true;
}

Frame.prototype.addFrameToGame = function() {
  if (!this.validateBallTotal()) {
    throw "Not a valid score";
  } else if (this.balls[0] === null || this.balls[1] === null) {
    throw "Both scores must be present";
  } else {
    game.setScore(this.balls[0], this.balls[1]);
    this.resetFrame();
  }
}

Frame.prototype.resetFrame = function() {
  this.balls = [null, null];
}
