function Game() {
  this.score = 0;
  this.ballcount = 0;
  this.previousBall = 0;
}

Game.prototype.bowlA = function(number) {
  this._checkIfOverTen(number);
  this._checkIfGameOver();
  this._checkIfFrameMaxScoreExceeded(number);
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

Game.prototype._checkIfOverTen = function(number) {
  if (number > 10) {
    throw new Error('Not possible: Max score in one go is 10');
  }
};

Game.prototype._checkIfGameOver = function() {
  if (this.getFrame() > 10) {
    throw new Error('Game over: The 10th frame has finished');
  }
};

Game.prototype._checkIfFrameMaxScoreExceeded = function(number) {
  if (((this.ballcount+1) % 2 === 0) && (this.previousBall + number > 10)) {
    throw new Error('Not possible: Only 10 pins per frame')
  }
};
