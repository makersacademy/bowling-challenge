function Game() {
  this.score = 0;
  this.ballcount = 0;
  this.previousBall;
}

Game.prototype.knockDownPins = function(number) {
  if (number > 10) {
    throw new Error('Not possible: Max score in one go is 10');
  };
  if (this.getFrame() > 10) {
    throw new Error('Game over: The 10th frame has finished');
  }
  if (((this.ballcount+1) % 2 === 0) && (this.previousBall + number > 10)) {
    throw new Error('Not possible: Only 10 pins per frame')
  }
  this.ballcount += 1;
  this.score += number;
  this.previousBall = number;
};

Game.prototype.getScore = function() {
  return this.score;
};

Game.prototype.getFrame = function() {
  return Math.floor((this.ballcount / 2) + 1);
};
